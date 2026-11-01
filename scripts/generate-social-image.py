"""Optional: regenerate public/og-image.png with Python + Pillow; no domain is embedded."""
from pathlib import Path
import re
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
profile = dict(re.findall(r'^\s*(displayName|role|location): "([^"]+)"', (ROOT / 'src/data/profile.js').read_text(), re.M))


def font(size, bold=False):
    name = 'DejaVuSans-Bold.ttf' if bold else 'DejaVuSans.ttf'
    return ImageFont.truetype(f'/usr/share/fonts/truetype/dejavu/{name}', size)


image = Image.new('RGB', (1200, 630), '#fafafa')
draw = ImageDraw.Draw(image)
for x in range(912, 1200, 48):
    draw.line((x, 0, x, 630), fill='#e4e4e7')
for y in range(0, 631, 48):
    draw.line((912, y, 1200, y), fill='#e4e4e7')
draw.rounded_rectangle((72, 56, 140, 124), radius=19, fill='#00787e')
draw.text((91, 60), 'I', font=font(46, True), fill='#ffffff')
draw.text((164, 79), 'PORTFOLIO', font=font(19), fill='#52525b')
draw.text((68, 210), profile['displayName'], font=font(78, True), fill='#18181b')
draw.rectangle((72, 320, 144, 325), fill='#00787e')
draw.text((72, 355), profile['role'], font=font(36), fill='#00787e')
draw.text((72, 420), 'Laravel  /  PHP  /  JavaScript', font=font(24), fill='#52525b')
draw.line((72, 526, 844, 526), fill='#e4e4e7', width=2)
draw.text((72, 552), profile['location'], font=font(20), fill='#52525b')
image.save(ROOT / 'public/og-image.png', optimize=True)
