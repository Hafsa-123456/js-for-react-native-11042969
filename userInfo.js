function createUserProfiles(originalName , modifiedName) {
    if(originalName.length !== modifiedName.length){
        throw new Error( ' both arrays are supposed to have the same length');
    }
    return originalName.map(( name, index)=>({ 
        id: + 1,
        originalName:name,
        modifiedName: modifiedName[ index],
    }) );
}

const originalName = [ " Alice " , " Bob "];
const modifiedName = [ "alice ", " BOB " ];
const userProfile = createUserProfiles(originalName, modifiedName);
console.log(userProfile);