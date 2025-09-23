# DINPro Fonts Setup

## Required Font Files

Please add the following DINPro font files to this directory (`public/fonts/`):

1. `DINPro.otf` - Base DINPro font
2. `DINPro-Regular.otf` - Regular weight
3. `DINPro-Light.otf` - Light weight (300)
4. `DINPro-Medium.otf` - Medium weight (500)
5. `DINPro-Bold.otf` - Bold weight (700)
6. `DINPro-BoldItalic.otf` - Bold Italic weight (700)

## Font Usage

The fonts are automatically loaded via `fonts.css` and can be used with the following CSS classes:

- `.font-light` - Light weight (300)
- `.font-regular` - Regular weight (400)
- `.font-medium` - Medium weight (500)
- `.font-bold` - Bold weight (700)
- `.font-bold-italic` - Bold Italic weight (700)

## Default Usage

All text elements will automatically use DINPro as the primary font family. The font stack falls back to Arial, Helvetica, and sans-serif if DINPro is not available.

## File Structure

```
public/fonts/
├── fonts.css (already created)
├── DINPro.otf (add this file)
├── DINPro-Regular.otf (add this file)
├── DINPro-Light.otf (add this file)
├── DINPro-Medium.otf (add this file)
├── DINPro-Bold.otf (add this file)
└── DINPro-BoldItalic.otf (add this file)
```
