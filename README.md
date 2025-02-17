# Advanced To-Do List App

[Live Demo](https://elisei-m.github.io/to-do-list2/)

![image](https://github.com/user-attachments/assets/b96c5f65-707b-407c-b770-09d2a2d90e55)


## Descriere

Această aplicație este o versiune avansată a unui To-Do List, construită cu HTML, CSS și JavaScript, care rulează complet pe GitHub Pages. Aplicația include funcționalități extinse precum:

- **Adăugare Task:** Introdu titlul, data de finalizare și prioritatea unui task.
- **Editare Task:** Permite editarea titlului task-ului cu o interfață intuitivă.
- **Ștergere Task cu Confirmare:** Confirmare înainte de a șterge un task, cu o animație de fade-out.
- **Marcarea ca Finalizat:** Click pe task (cu excepția butoanelor) pentru a-l marca ca complet.
- **Drag & Drop:** Reordonare a task-urilor folosind SortableJS.
- **Filtrare și Căutare:** Caută task-uri după titlu și filtrează-le după prioritate.
- **Dark/Light Mode:** Comutare între modurile Dark și Light.
- **Persistență:** Task-urile sunt salvate în `localStorage`, astfel încât datele rămân disponibile chiar și după refresh.

## Funcționalități

- **Adăugare Task:** Completează câmpurile de titlu, dată și prioritate, apoi apasă "Adaugă Task".
- **Editare Task:** Click pe butonul "Editează" pentru a transforma titlul într-un câmp de input, apoi salvează modificările.
- **Ștergere Task:** Apasă butonul "Șterge" și confirmă ștergerea pentru a elimina task-ul.
- **Drag & Drop:** Reordonează task-urile prin drag și drop.
- **Filtrare și Căutare:** Utilizează câmpul de căutare și selectorul de prioritate pentru a găsi rapid task-urile dorite.
- **Tema:** Schimbă între Dark Mode și Light Mode cu un singur click.

## Tehnologii folosite

- **HTML5** – Structura paginii
- **CSS3** – Stilizare și animații (cu ajutorul Animate.css)
- **JavaScript** – Funcționalitate și interacțiuni (inclusiv manipularea `localStorage`)
- **SortableJS** – Reordonarea task-urilor prin drag & drop

## Instalare și Rulare Locală

1. **Clonează repository-ul:**
   ```bash
   git clone https://github.com/elisei-m/to-do-list2.git

Navighează în directorul proiectului:
cd to-do-list2

Deschide fișierul index.html în browserul tău:
Poți deschide fișierul direct sau poți folosi o extensie Live Server din VS Code pentru o experiență de dezvoltare mai rapidă.

Cum Funcționează
Adăugare Task: Completează câmpurile din secțiunea de input și apasă "Adaugă Task". Task-ul va apărea în listă și va fi salvat în localStorage.
Editare Task: Click pe butonul "Editează" de lângă un task pentru a modifica titlul. După editare, click pe "Salvează" pentru a actualiza modificările.
Ștergere Task: Click pe butonul "Șterge" va afișa o fereastră de confirmare. Dacă confirmi, task-ul va fi șters cu o animație de fade-out.
Filtrare & Căutare: Utilizează câmpul de căutare pentru a găsi task-uri după titlu și selectorul de prioritate pentru a filtra după nivelul de prioritate.
Drag & Drop: Reordonează task-urile prin simpla tragere și plasare.
Comutare Tema: Apasă butonul "Dark Mode" / "Light Mode" pentru a schimba aspectul interfeței.
Contribuții
Contribuțiile sunt binevenite! Dacă dorești să îmbunătățești aplicația:

Fork-uiți repository-ul.
Creați o ramură nouă (ex: feature/noua-functie).
Trimiteți un Pull Request cu modificările voastre.
Licență
Acest proiect este licențiat sub MIT License.

Recunoștințe
Animate.css pentru animații.
SortableJS pentru funcționalitatea de drag & drop.


Acest `README.md` oferă o prezentare completă a aplicației, descrie funcționalitățile, tehnologiile folosite, instrucțiunile pentru rulare locală și modul în care alți dezvoltatori pot contribui la proiect. Dacă dorești să adaugi sau să modifici ceva, anunță-mă!

