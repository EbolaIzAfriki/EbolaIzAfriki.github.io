function OnklickBut1()
{
  let x = document.getElementById("TextBoxX").value;
  let chislitel = 1, znamenatel = 1;
  for(let i = 2; i <= 128; i+=2)
  {
      chislitel *= (x-i);
  }
  for(let i = 1; i <= 127; i+=2)
  {
    znamenatel *= (x-i);
  }
  document.getElementById("TextBoxResult").value = chislitel/znamenatel;
}

function OnKlickBut2()
{
    var Alfavit = "абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
    var ReversedAlfavit = "яюэьыъщшчцхфутсрпонмлкйизжёедгвбаЯЮЭЬЫЪЩШЧЦХФУТСРПОНМЛКЙИЗЖЁЕДГВБА";
    var WridedWord = document.getElementById("Text").value;
    let FinallyWord = "";
    for(let i = 0; i< WridedWord.length; i++)
    {
        for(let j = 0; j < Alfavit.length; j++)
        {
            if(WridedWord[i] == Alfavit[j])
            {
                FinallyWord += ReversedAlfavit[j];
                break;
            }
        }
    }
    document.getElementById("TextBoxResult1").value = FinallyWord;
}
