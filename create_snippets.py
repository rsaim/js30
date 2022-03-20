"""
- Go into each subdir in cwd
- Look for *index-START.html file
- Display the html content using L{pyppeteer} and take a screenshot
- Save images to ./docs/images
- Images are named based on their parent dir name
"""
import glob
from os.path import abspath, realpath, basename, dirname
from pyppeteer import launch
import asyncio


async def save_html_screenshot(file_path):
    url = "file://" + file_path
    browser = await launch()
    page =  await browser.newPage()
    await page.goto(url)
    img_path = f"./cd do    docs/images/{basename(dirname(file_path))}.png"
    await page.screenshot({'path': img_path, 'fullPage': 'true'})
    print(f"Saved: {img_path}")
    await browser.close()

async def main():
    CWD = abspath(realpath((".")))
    if CWD and not CWD.endswith("/"):
        CWD += "/"  # glob needs a trailing /
    
    path_name = CWD + '**/*index-START.html'
    print(f"Finding pdf files with glob {path_name}")
    
    html_files = []
    for filename in glob.iglob(path_name, recursive=True):
        # import ipdb; ipdb.set_trace()
        html_files.append(filename)
    print(f"Found {len(html_files)} files")
    # print(html_files)
    [await save_html_screenshot(file) for file in html_files]

if __name__ == '__main__':
    asyncio.get_event_loop().run_until_complete(main())

