#!/bin/bash

# Website Test Runner Script
# Runs automated tests using Playwright MCP

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Default values
BASE_URL="http://localhost:3000"
TEST_TYPE="local"

# Parse arguments
while [[ $# -gt 0 ]]; do
  case $1 in
    --production)
      BASE_URL="https://www.abishekganesh.com"
      TEST_TYPE="production"
      shift
      ;;
    --url)
      BASE_URL="$2"
      TEST_TYPE="custom"
      shift 2
      ;;
    --smoke)
      TEST_TYPE="smoke"
      shift
      ;;
    --help)
      echo "Usage: ./run-tests.sh [OPTIONS]"
      echo ""
      echo "Options:"
      echo "  --production    Test the production website"
      echo "  --url URL       Test a specific URL"
      echo "  --smoke         Run quick smoke tests only"
      echo "  --help          Show this help message"
      exit 0
      ;;
    *)
      echo "Unknown option: $1"
      echo "Use --help for usage information"
      exit 1
      ;;
  esac
done

# Function to check if server is running
check_server() {
  echo -e "${BLUE}🔍 Checking if server is running at $BASE_URL...${NC}"
  if curl -s -o /dev/null -w "%{http_code}" "$BASE_URL" | grep -q "200\|301\|302"; then
    echo -e "${GREEN}✅ Server is responding${NC}"
    return 0
  else
    echo -e "${RED}❌ Server is not responding at $BASE_URL${NC}"
    return 1
  fi
}

# Function to run smoke tests
run_smoke_tests() {
  echo -e "${BLUE}🚬 Running Smoke Tests...${NC}"
  echo ""
  
  # Quick critical path tests
  echo "Testing homepage..."
  curl -s -o /dev/null -w "  Homepage: %{http_code}\n" "$BASE_URL/"
  
  echo "Testing navigation pages..."
  for page in about resume teaching vegan voiceover stats contact; do
    curl -s -o /dev/null -w "  /$page: %{http_code}\n" "$BASE_URL/$page"
  done
  
  echo ""
  echo -e "${GREEN}✅ Smoke tests completed${NC}"
}

# Function to run full test suite
run_full_tests() {
  echo -e "${BLUE}🧪 Running Full Test Suite...${NC}"
  echo ""
  
  # Check if Python is available
  if ! command -v python3 &> /dev/null; then
    echo -e "${YELLOW}⚠️  Python3 not found, using JavaScript tests instead${NC}"
    node tests/playwright/website-tests.js --url "$BASE_URL"
  else
    python3 tests/playwright/run-tests.py --url "$BASE_URL"
  fi
}

# Main execution
echo -e "${BLUE}=====================================${NC}"
echo -e "${BLUE}   Website Automated Test Runner     ${NC}"
echo -e "${BLUE}=====================================${NC}"
echo ""
echo -e "Test Type: ${YELLOW}$TEST_TYPE${NC}"
echo -e "Target URL: ${YELLOW}$BASE_URL${NC}"
echo ""

# Check if server is running (skip for production)
if [[ "$TEST_TYPE" != "production" ]]; then
  if ! check_server; then
    echo ""
    echo -e "${YELLOW}💡 Tip: Start the development server with:${NC}"
    echo -e "   ${GREEN}npm run dev${NC}"
    echo ""
    exit 1
  fi
fi

# Run appropriate tests
if [[ "$TEST_TYPE" == "smoke" ]]; then
  run_smoke_tests
else
  run_full_tests
fi

# Check test results
if [ -f "tests/playwright/test-results.json" ]; then
  echo ""
  echo -e "${BLUE}📊 Test Results Summary:${NC}"
  
  # Count array lengths, not key occurrences - grep -c '"failed"' matches the
  # key itself and so always returned 1, failing the gate even on a clean run.
  PASSED=$(node -e "const r=require('./tests/playwright/test-results.json');process.stdout.write(String((r.passed||[]).length))")
  FAILED=$(node -e "const r=require('./tests/playwright/test-results.json');process.stdout.write(String((r.failed||[]).length))")

  echo -e "Passed: ${PASSED}, Failed: ${FAILED}"

  if [ "$FAILED" -eq 0 ]; then
    echo -e "${GREEN}✅ All tests passed!${NC}"
    exit 0
  else
    echo -e "${RED}❌ Some tests failed. Check test-results.json for details.${NC}"
    exit 1
  fi
fi

echo ""
echo -e "${GREEN}✅ Test run completed${NC}"