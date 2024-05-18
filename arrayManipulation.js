function processArray( numbers ) {
    return numbers.map( num => { 
        if (num % 2 === 0) {
            return num * num ;
            
        } else {
            return num * 3 ;
            
        }
     })
    }

    function formatArrayStrings( strings, numbers) {
        if (strings.length !== numbers.length) {
            throw new Error('string length and number length must be the same');
        }
        return strings.map(( strings,index ) => {
            const num = numbers[ index];
            if (num % 2 == 0) { 
                return strings.toUppercase();
                
            } else {
                return strings.toLowercase()
                
            }
        })
        
    }