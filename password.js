const charAmountRange = document.getElementById ('charAmountRange')
const charAmountNumber = document.getElementById ('charAmountNumber')

charNumberAmount.addEventListener('input',syncCharacterAmount)
charRangeAmount.addEventListener('input',syncCharacterAmount)

   function syncCharacterAmount(e){
    const value = e.target.value
    syncCharAmountNumber.value = value
    syncCharAmountRange.value = value
}