# **_Matching game_**

## **_Date: 1/17/2024_**

### By: Sayed Najeeb

#### [GitHub](https://github.com/najeeb2442) | [LinkedIn](https://www.linkedin.com/in/sayed-najeeb-mohsen/)

---

### **_Description_**

there are 12 (could be more) cards, every two cards have the same color ,
the player have to match every two cards that have the same color

---

### **_Getting Started_**

Let's get started!

choose a card then try matching this card color with another one  
CAN YOU DO IT ?

![i_think_not](https://i.imgur.com/Odqpt7c.gif)

anyway, at the bottom there are 2 fields for you to enter the rows and columns, respectively.
and be careful because they change immediately!!

![impossible](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGZ0NmlmbHF4Zzh4ZHV2aGM1b2Rta2J4bWF3ejQyMDBod2szMzN4diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/atfHlwAhizfxdtdw60/giphy.gif)

oh and a restart button.

now you are ready to start!
be happy and have fun !

### [Live Link For The Game](https://matchinggame.surge.sh/)

### **_Screenshots_**

![1](/p1.PNG)

![2](/p2.PNG)

![3](/won.PNG)

### **_Technologies Used_**

- HTML 5
- CSS
- JavaScript

### dynamic number of cards and sizing :

```
  for (let index = 0; index < cells / 2; index++) {
    const color = randomColor()
    colors.push(color)
    colors.push(color)
  }
  for (let index = 0; index < cells; ) {
    const button = document.createElement("button")
    let num = randomNumber(cells)
    button.classList.add("card")
    button.innerHTML = `<div value="${colors[num]}" class="front"></div>  `
    colors.splice(num, 1)
    cells--
    // adjusting the size of the cards
    button.setAttribute("style", "width: " + wSize + "; height: " + hSize)
    button.children[0].setAttribute("style", "width: " + wS + "; height: " + hS)
    main.append(button)
  }
  makeEventListener()
```

this function creates the cards dynamically by first, calling a function that return a randomly generated color and then push it twice in a array of colors.based on the number of cards ofcourse, which is calculated by the number of rows and columns the user entered, then for each card it create a div tag, which become the card it self,
it then add a card class, height and width according to the number of cards.

### future updates

- [x] css and design
- [] add timer
- [] add defeats
- [] add score board

### Credits

#### images : [Google](https://www.google.com/) | [Adobe](https://stock.adobe.com/bh/search) | [Unsplash](https://unsplash.com/)

#### game design : [Memozor](https://www.memozor.com/memory-games/for-adults/black-and-white-2) | [draw.io](https://app.diagrams.net/) | [w3school](https://www.w3schools.com/howto/howto_css_flip_card.asp) | [stackOverFlow](https://stackoverflow.com/questions/11238508/how-to-get-value-of-a-div-using-javascript) | [dynamic sizing](https://stackoverflow.com/questions/50495835/fit-boxes-dynamically-in-a-container-with-flexbox) | [fonts](https://fonts.google.com/) | [colors](https://coolors.co/generate) | [the best thing ever](https://stackoverflow.com/questions/50495835/fit-boxes-dynamically-in-a-container-with-flexbox)

####
