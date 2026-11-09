import cv2
import numpy as np
from PIL import Image, ImageSequence

def remove_white_bg(in_path, out_path, thresh=240, grow=1):
    gif = Image.open(in_path)
    frames, durations = [], []

    for frame in ImageSequence.Iterator(gif):
        durations.append(frame.info.get("duration", 100))
        rgb = np.array(frame.convert("RGB"))
        gray = cv2.cvtColor(rgb, cv2.COLOR_RGB2GRAY)

        # கிட்டத்தட்ட வெள்ளை பிக்சல்கள்
        _, white = cv2.threshold(gray, thresh, 255, cv2.THRESH_BINARY)

        # ஓரங்களோட (border) connect ஆன வெள்ளை மட்டும் = பேக்ரவுண்ட்
        # (உள்ள இருக்கிற வெள்ளை, உதாரணம் கண்ணு/சட்டை, அழியாது)
        _, labels = cv2.connectedComponents(white)
        edge_labels = np.unique(np.concatenate(
            [labels[0], labels[-1], labels[:, 0], labels[:, -1]]))
        edge_labels = edge_labels[edge_labels != 0]
        bg = np.isin(labels, edge_labels).astype(np.uint8) * 255

        # ஓரத்துல இருக்கிற வெள்ளை halo குறைக்க கொஞ்சம் விரிவாக்கு
        if grow > 0:
            bg = cv2.dilate(bg, np.ones((3, 3), np.uint8), iterations=grow)

        # GIF-க்கு palette (255 நிறம்) + 1 இடம் transparency-க்கு
        img = Image.fromarray(rgb).convert("P", palette=Image.ADAPTIVE, colors=255)
        mask = Image.fromarray(bg)          # 255 = transparent ஆக்க வேண்டிய இடம்
        img.paste(255, mask)                # index 255 = transparent
        frames.append(img)

    frames[0].save(
        out_path,
        save_all=True,
        append_images=frames[1:],
        duration=durations,
        loop=0,
        transparency=255,
        disposal=2,      # முக்கியம்: ஒவ்வொரு frame-க்கும் முன்னாடி clear பண்ணும்
        optimize=False,
    )

remove_white_bg("D:\AIDS\diviya_export_mazzev\public\mazzev-peacock.gif", "output.gif")