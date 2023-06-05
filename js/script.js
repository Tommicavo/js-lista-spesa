console.log("js ok");

const shoppingListElement = document.getElementById("shoppingList");
shoppingListElement.style.listStyleType = "none";
shoppingListElement.style.paddingInlineStart = "0";

const shoppingList = ["pane", "latte", "uova", "mele", "carne", "vino", "insalata"];

// for (let i = 0; i < shoppingList.length; i++){
//     const listItem = document.createElement("li");
//     listItem.innerText = `${i + 1}) - ${shoppingList[i]}`;
//     shoppingListElement.appendChild(listItem);
// }

let i = 0;
while (i < shoppingList.length){
    const listItem = document.createElement("li");
    listItem.innerText = `${i + 1}) - ${shoppingList[i]}`;
    shoppingListElement.appendChild(listItem);
    i += 1;
}
