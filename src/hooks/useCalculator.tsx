import { useRef, useState } from "react";

enum Operators {
    add, subtract, multiplicate, divide
}

interface Props {

}

export const useCalculator = () => {

    const [number, setNumber] = useState('0');
    const [resultsNumber, setResultsNumber] = useState('0');
    const lastOperation = useRef<Operators>();


    const clean = () => { setNumber('0'); setResultsNumber('0'); }

    const buildNumber = ( resultsNumber: string ) => {
        
        if( number.includes('.') && resultsNumber.startsWith('.') ) return;
        setNumber(number!=='0' || resultsNumber === '.' ? number + resultsNumber : resultsNumber)     
        //Refactory
        // if ( number.startsWith('0') || number.startsWith('-0')) {
        //     //decimal
        //     if ( resultsNumber === '.' ) {
        //         setNumber( number + resultsNumber );
        //         //can put 0.000000
        //     } else if ( resultsNumber === '0' && number.includes('.') ) {
        //         setNumber( number + resultsNumber );
        //         //rewrite 0 with the value selected.
        //     } else if ( resultsNumber !== '0' && !resultsNumber.includes('0') ) {
        //         setNumber(resultsNumber);
        //         //can't put 0000.00000
        //     } else if( resultsNumber === '0' && !number.includes('.') ) {
        //         setNumber( number );
        //     }

            
            
        // } else {
        //     setNumber( number + resultsNumber)
        // }
    }
    const positiveNegative = () => {
        number.includes('-') ? setNumber( number.replace('-', '') ) : setNumber( '-' + number )
    }

    const delButton = () => {
        if( number.length === 1 || number.length === 2 && number.startsWith('-') ) {
            setNumber('0');
        } else { setNumber(number.slice(0, -1)) }
    }

    const setNumResult= () => {

        // number.endsWith('.') ? setResultsNumber( number.slice(0, -1) ) : setNumber('0');
        if( number.endsWith('.') ) {
            setResultsNumber( number.slice(0, -1) )
        } else {
            setResultsNumber(number)
        }

        setNumber('0')
    }

    const btnDivide = () => {
        setNumResult();
        lastOperation.current = Operators.divide;
    }

    const btnMultiply = () => {
        setNumResult();
        lastOperation.current = Operators.multiplicate;
    }
    
    const btnSubtract = () => {
        setNumResult();
        lastOperation.current = Operators.subtract;
    }

    const btnAdd = () => {
        setNumResult();
        lastOperation.current = Operators.add;
    }

    const calculate = () => {

        const num1 = Number( number );
        const num2 = Number ( resultsNumber );

        switch (lastOperation.current) {
            case Operators.add:
                setNumber(`${ num1 + num2 }`)
                break;

            case Operators.subtract:
                setNumber(`${ num2 - num1 }`)
                break;

            case Operators.multiplicate:
                setNumber(`${ num1 * num2 }`)
                break;

            case Operators.divide:
                setNumber(`${ num2 / num1 }`)
                break;
                
        
            default:
                break;
        }

        setResultsNumber('0');
    }

    //Export logic.
     return {
        resultsNumber,
        number,
        clean,
        positiveNegative,
        delButton,
        btnDivide,
        buildNumber,
        btnMultiply,
        btnSubtract,
        btnAdd,
        calculate,
     }
}
