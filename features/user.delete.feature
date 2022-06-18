Feature: Delete user
    Scenario: Puedo borrar un usuario que tengo en el sistema
        Given El identificador de un usuario "asdf1"
        Then Se puede borrar y obtengo un "true"
    
    Scenario: No puedo borrar un usuario que no tengo en el sistema
        Given El identificador de un usuario que no tengo en el sistema "efc1"
        Then No se puede borrar y obtengo un "false"