var elText = document.querySelector(".text");
var text = document.querySelector(".text").style.fontSize = '40px'

var result = Number(prompt("Qancha pulingiz bor?").trim());

var phonePrice = 2000;

if (isNaN(result)) {
  elText.textContent = "Iltimos, son kiriting!";
} else {
  if (result >= phonePrice) {
    elText.textContent = "Tabriklaymiz bilet sotib olishga pulingiz yetarli";
  } else {
    elText.textContent = "Bilet olishga pulingiz yetarli emas ekan";
  }
}
