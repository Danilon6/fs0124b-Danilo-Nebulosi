class User{
    constructor(_firstName, _lastName, _age, _location ){
        this.firstName = _firstName
        this.lastName = _lastName
        this.age = _age
        this.location = _location
    }
    confrontoEta(user1, user2){
        let eta1 = user1.age
        let eta2 = user2.age
        if (eta1 >= eta2) {
            return `L'età del primo utente è uguale o maggiore di quella del secondo, infatti ${eta1} >= ${eta2}`
        } else {
            return `L'età del secondo utente è uguale o maggiore di quella del secondo, infatti ${eta2} >= ${eta1}`
        }
    }
}