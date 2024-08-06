import Api from "@/utils/Api";
import { sendError } from "next/dist/server/api-utils";
import { useEffect, useState } from "react";


export default function useFeedback() {

    const [info, setInfo] = useState()
    const [input, setInput] = useState({
        name: '',
        phone: ''
    })
    const [error, setError] = useState({
        name: '',
        phone: ''
    })

    useEffect(() => {

        (async () => {

            let res = await Api.getWithoutCache('contact/info')
            setInfo(res)

        })()

    })  

    const changeName = (value) => {
        validateName(value)
        setInput(prev => ({...prev, name: value}))
    }

    const validateName = (value) => {
        if(!value) {
            setError(prev => ({...prev, name: 'Обязательное поле'}))
            return 'error'
        } else {
            setError(prev => ({...prev, name: ''}))
        }
        
    }

    const validatePhone = (value) => {
        
        if(!value) {
            setError(prev => ({...prev, phone: 'Обязательное поле'}))
            return 'error'
        } else if (value.length < 18) {
            setError(prev => ({...prev, phone: 'Номер телефона не может содержать менее 10 сиволов'}))
            return 'error'
        } else {
            setError(prev => ({...prev, phone: ''}))
        }
    }

    var onPhonePaste = function (e) {
        var input = e.target,
            inputNumbersValue = getInputNumbersValue(input);
        var pasted = e.clipboardData || window.clipboardData;
        if (pasted) {
            var pastedText = pasted.getData('Text');
            if (/\D/g.test(pastedText)) {
                setInput(prev => ({...prev, phone: inputNumbersValue}))
                return;
            }
        }
    }

    var onPhoneInput = function (e) {

        var input = e.target,
        inputNumbersValue = getInputNumbersValue(input),
        selectionStart = input.selectionStart,
        formattedInputValue = "";

        if (!inputNumbersValue) {
            return setInput(prev => ({...prev, phone: ''}));
        }

        if (input.value.length != selectionStart) {
            // Editing in the middle of input, not last symbol
            if (e.data && /\D/g.test(e.data)) {
                // Attempt to input non-numeric symbol
                setInput(prev => ({...prev, phone: inputNumbersValue}))
            }
            return;
        }
       
        if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
        var firstSymbols = (inputNumbersValue[0] == "7") ? "+7" : "+7";
        formattedInputValue = input.value = firstSymbols + " ";
        if (inputNumbersValue.length > 1) {
            formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
        }
        if (inputNumbersValue.length >= 5) {
            formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
        }
        if (inputNumbersValue.length >= 8) {
            formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
        }
        if (inputNumbersValue.length >= 10) {
            formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
        }
        
        validatePhone(formattedInputValue)
        setInput(prev => ({...prev, phone: formattedInputValue}))
    }

    var onPhoneKeyDown = function (e) {

        var inputValue = e.target.value.replace(/\D/g, '');
        if (e.keyCode == 7 && inputValue.length == 1) {
            setInput(prev => ({...prev, phone: ''}))
        }
    }

    const sendForm = async (e) => {
        e.preventDefault()



        let errorChange = 0

        if(validateName(input.name) === 'error') {
            errorChange += 1
        }

        if(validatePhone(input.phone) === 'error') {
            errorChange += 1
        }

        if(errorChange > 0) {
            return
        }

        let res = await Api.post('feedback/send', input)

        if(res === 'success') {
            
        }
    }

    var getInputNumbersValue = function (input) {
        return input.value.replace(/\D/g, '');
    }

    return { info, input, validateName, changeName, error, sendError, onPhoneInput, onPhoneKeyDown, onPhonePaste, sendForm }
}