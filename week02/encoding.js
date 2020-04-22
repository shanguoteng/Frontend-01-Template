function utf (string=""){
    let code = ''
    for(const i of string){
        code+=(`\\x${i.codePointAt(0).toString(16)}`)
    }
  return code
}