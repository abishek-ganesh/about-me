from PIL import Image

group1 = [
  r"./art/bg-pink.png",
  r"./art/bg-grey.png",
  r"./art/bg-white.png",
  r"./art/bg-yellow.png"
]
group2 = [
  r"./art/shirt-blue.png",
  r"./art/shirt-green.png",
  r"./art/shirt-red.png"
]
group3 = [
  r"./art/hair-silver.png",
  r"./art/hair-black.png",
  r"./art/hair-brown.png",
  r"./art/hair-blonde.png"
]
group4 = [
  r"./art/face-brown.png",
  r"./art/face-white.png"
]

group5 = [
  r"./art/eyes-blue.png",
  r"./art/eyes-brown.png",
  r"./art/eyes-green.png"
]

group6 = [
  r"./art/mouth-smile.png"
]
counter = 0

def createImage(a,b,c,d,e,f,counter):
  first = group1[a]
  second = group2[b]
  third = group3[c]
  fourth = group4[d]
  fifth = group5[e]
  sixth = group6[f]

  image01 = Image.open(first).convert("RGBA")
  image02 = Image.open(second).convert("RGBA")
  image03 = Image.open(third).convert("RGBA")
  image04 = Image.open(fourth).convert("RGBA")
  image05 = Image.open(fifth).convert("RGBA")
  image06 = Image.open(sixth).convert("RGBA")


  intermediate = Image.alpha_composite(image01, image02)
  intermediate2 = Image.alpha_composite(intermediate,image03)
  intermediate3 = Image.alpha_composite(intermediate2,image04)
  intermediate4 = Image.alpha_composite(intermediate3,image05)
  intermediate5 = Image.alpha_composite(intermediate4,image06)




  name = "./nft-collection/" + str(counter) + ".png"
  intermediate5.save(name)


for a in range(len(group1)):
  for b in range(len(group2)):
    for c in range(len(group3)):
      for d in range(len(group4)):
        for e in range(len(group5)):
          for f in range(len(group6)):

            createImage(a,b,c,d,e,f,counter)
            counter = counter + 1
