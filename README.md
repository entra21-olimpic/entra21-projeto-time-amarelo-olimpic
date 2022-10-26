# Olimpic
The team is composed of the members below and brings an idea of ​​a Social Network to share experiences in the practices of sports in your daily life. It offers the possibility to create an account, control your profile, interact with other users and record your activities.

<table>
<thead>
	<tr>
		<th>
            <a href="https://github.com/Alexsandro-Correa">
                <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/104040311?v=4" width="120px;" alt=""/>
            </a>
        </th>
		<th>
        <a href="https://github.com/Ciro-Ugalde">
            <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/102829436?v=4" width="120px;" alt=""/>
        </th>
        <th>
        <a href="https://github.com/lucascagostinho">
            <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/77413786?v=4" width="120px;" alt=""/>
        </th>
        <th>
        <a href="https://github.com/Ste-Vieira">
            <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/104040319?v=4" width="120px;" alt=""/>
        </th>
	</tr>
</thead>
</table>


## **Angular**

1. Make a project copy to your machine:
    - git clone [https://github.com/entra21-olimpic/entra21-projeto-time-amarelo-olimpic.git](https://github.com/entra21-olimpic/entra21-projeto-time-amarelo-olimpic.git)
  

2. Installing VS Code.

- To download the vs code click [here](https://code.visualstudio.com/download)!

        - First download the installation wizard, the installation process is very simple, just follow the standard way of installing programs in Windows (next, next, next, install). 
 
        - However, make sure that on the second screen of the wizard, the option “Add to PATH (available after restart)” is checked, in this way it will be possible to open the editor through the terminal with the code command, and also check the options to open with code, to be able to open VS Code directly in the desired folder.

![alt](https://dkrn4sk0rn31v.cloudfront.net/uploads/2021/01/tela-de-instala%C3%A7%C3%A3o-do-vs-code-no-windows.png)

3. The node must be installed.
        - If you don't have node installed, go to the page and download it according to your operating system.
        - Node download page [HERE](https://nodejs.org/en/).
4.  Angular CLI must be installed.
        - If the Angular CLI is not installed it will be necessary to install it, for that node must be installed. Run the following command in your terminal:
    
    `npm install -g @angular/cli@latest`
    
    - After performing the previous steps, it will be necessary to install the dependencies used in the project, with the project page open in the terminal, run:
    
    `npm install`
    
    - With everything ready, just run the ng serve command and open the link provided in the browser of your choice.
    
    `ng serve`

## **Spring**

1. To run the project, Java JDK, Spring tools Suite and Maven must be installed and the environment variable defined.
2. To install Java JDK
    - Download JDK from [here](https://drive.google.com/file/d/1fT_WYUkoMXVoRfWb6EgSr8Hn9BevUeLO/view?usp=sharing)
    - Install the JDK exe File
    - Check the Directory ``C:\Program Files\Java\jdk-xxx`` if exists folder jdk
3. To install Maven
    - Download Maven [here](https://maven.apache.org/download.cgi)
    - Unzip file
    - Create a folder named maven in ``C:\``
    - Press the Windows key on the keyboard and type: "edit system variables". Click on the option that appears.
    - On the "Environment Variables" screen that will open, click the "New" button just below the part of the screen that says "environment Variables".
    - In the variable name and value fields, fill in: ``MAVEN_HOME`` and ``C:\maven\bin``, respectively. Confirm.
    - Check if it worked by opening a new prompt and typing ``mvn -version``
4. To install Spring Tools Suite
    - Download Spring Tools Suite from the [site](https://spring.io/tools)
    - Double click on the downloaded file to unzip.
    - Wait for unpacking.
    - A folder called ``sts-x.xx.x.RELEASE`` will be created in the unzip location.
    - Move the folder to a location of your choice.
    -Select the ``SpringToolSuite4`` application from inside the folder and create a shortcut on the desktop for easy access.
5. Make a project copy to your machine:
    - git clone [https://github.com/entra21-olimpic/entra21-projeto-time-amarelo-olimpic.git](https://github.com/entra21-olimpic/entra21-projeto-time-amarelo-olimpic.git)
6. Import the project into your Spring Tools Suite.
    - File -> Import -> Maven -> Existing Maven Projects -> Next -> Browse -> Select Downloaded Project -> Finish
7. A change to the application.properties file is required.
    - It is necessary to define your bank address, username and password.
    - By default these are the data, just when installing the database enter the same data for username and password (
user: root and password: Mysql123@ )
    ```` 
    spring.datasource.url=jdbc:mysql://localhost:3306/olimpic
    spring.datasource.username=root
    spring.datasource.password=Mysql123@
    ````
        - Note - to work correctly the username and password must be set equal to the username and passwords that were used when installing the database.

## **MySql**

1. To run the project, MySql just needs to be running with a database called olimpic, Spring itself will create the necessary tables.
2. To install mysql just follow the guidelines found [here](https://www.devmedia.com.br/instalando-e-configurando-a-nova-versao-do-mysql/25813) and [Download](https://drive.google.com/file/d/1YbWqaWGp-IOoksGA7D3CeZ1MhCmiELCW/view?usp=sharing).
3. To create the database, open MySql Workbench
4. Access the local instance with your password.
5. Click on the fourth icon to create a new schema
6. Enter the bank name in the ``olimpic``` case. If you put another name, you need to change the settings in Spring to locate the bank.
7. Finally click apply.
8. Another way to do this is through the sql syntax with the command: 
    ````
    CREATE SCHEMA `olimpic`;
    ````


## **Monitor your activities and share with your friends!**

![Gif](/pratice.gif)