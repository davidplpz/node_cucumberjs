Feature: Create User

    Scenario: Al iniciar la aplicación, no existen usuarios en el repositorio
        When Inicio la app
        Then No existen usuarios en el repositorio

    Scenario: Puedo crear un usuario si los datos son correctos
        When Creo un usuario con los datos correctos
        Then Obtengo el identificador "asdf1"
    
    Scenario: No puedo crear un usuario si los datos son incorrectos
        When Creo un usuario con los datos incorrectos
        Then Obtengo un error de validación "Invalid user"
    
