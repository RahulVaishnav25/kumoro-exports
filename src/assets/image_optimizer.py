from PIL import Image

from resizeimage import resizeimage

import os

for subdir, dirs, files in os.walk(r'images'):
    for filename in files:
        filepath = subdir + os.sep + filename

        if filepath.endswith(".jpg") or filepath.endswith(".png"):
            print (filepath)

            with open(filepath, 'r+b') as f:
                with Image.open(f) as image:
                    if  image.size[0]>300 and image.size[1]>300 :
                        cover = resizeimage.resize_contain(image, [300, 300])
                        # print(image.format)
                        # cover.save(filepath.replace("images\\","images_opt\\").replace(".jpg",".png") , image.format)
                        cover.save(filepath.replace("images\\","images_opt\\") , "PNG")