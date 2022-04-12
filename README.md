# Latex Template
This repository holds to serve as a template for my basic requirements while typesetting notes, assignments, etc.

## Compiling LaTeX from the command line
Ensure that you have a TeX compiler installed.
For macosx versions, you can run the command:
```
brew install basictex
```
and execute the compiler on a file by running:
```
pdflatex filename.tex
```

## Structure
All packages (that I usually import) and definitions/macros that I use are listed in the following files, respectively:
- `meta/packages.tex`
- `meta/definitions.tex`

## Module System
Furthermore, I am following `rust`'s structure on module linking.
More specifically, each directory must contain a `mod.tex` file which then includes all files and subfolders in that folder.
Subfolders (and subsubfolders, etc.) must also contain a `mod.tex` file which links all of the files and folders inside of it.
