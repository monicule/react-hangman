export function Abc() {
    let keyboard = "QWERTYUIOPASDFGHJKLZXCVBNM";
    keyboard = keyboard.split('');
    return(
        keyboard.map(symbol => <button key={symbol}>{symbol}</button>)
    );    
}
