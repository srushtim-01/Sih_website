var styleElement = document.createElement('style');

// Append the <style> element to the <head> section of the document
document.head.appendChild(styleElement);
// Object to store text contents and their corresponding IDs
var textContents = {
  'ssh': `
  <h1 class="center pageTitle">Secure Shell (SSH)</h1>
  <h3>1. Make sure that the systems are on the same network</h3>
  <h3>2. Figure out the ip-address of the remote machine</h3>
  <span class="code">ip addr</span>
  <h3>3. Connect to the remote machine using the syntax</h3>
  <span class="code">ssh &lt;username&gt;@&lt;ipaddres&gt;</span>
  <h3>Example</h3>
  <span class="code">ssh pi@ipaddress</span>
  `,

  'create new user': `
  <h1 class="center pageTitle">The linux filesystem</h1>
  <span class="code">
                                           / (root)
                                           ┃
    ┏━━━━┳━━━━┳━━━━┳━━━━━┳━━━━┳━━━━━┳━━━━━━╋━━━━━━┳━━━━┳━━━━━┳━━━━━┳━━━━┳━━━━━┳━━━━┳━━━━┳━━━━┓
    ┃    ┃    ┃    ┃     ┃    ┃     ┃      ┃      ┃    ┃     ┃     ┃    ┃     ┃    ┃    ┃    ┃
   bin  boot dev  etc  home  lib  lib64  media   mnt  opt   proc  root run  sbin  srv  sys  tmp
    ┃                    ┃
   usr                   ┃
    ┃                    ┣━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━┓
   bin                   ┃                 ┃                 ┃                  ┃               ┃ 
                        pi               user1             user2              user3           user4   
                         ┃      
            ┏━━━━━━━━━━━━╋━━━━━━━━━━━━┳━━━━━━━━━━━━┳━━━━━━━━━━━━┓
            ┃            ┃            ┃            ┃            ┃ 
         Desktop      .bashrc   .bash_aliases    .ssh        file1.txt
  </span>
  <li>The <strong>/ (root)</strong> directory is the staring point of the file system</li>
  <li>The <strong>bin</strong> directory contains all the system binaries programs</li>
  <li>External devices like pendrives, harddisks, cdroms are mounted in <strong>media or mnt directories</strong></li>
  <li>The <strong>home</strong> direcotry contains all the <strong>users accounts</strong></li>        

  <h1 class="center pageTitle">adduser</h1>
  <h3>1. Open a terminal on your Linux system</h3>
  <h3>2. Run the <span class="keyword">adduser</span> command followed by the desired username:</h3>
  <span class="code">sudo adduser &lt;username&gt;</span>
  <li>This will create the new user along with the users home directory</li>
  <h3>3. Login using the username</h3>
  <span class="code">su &lt;username&gt;</span>
  `,

  'command-line basics': `
  <h1 class="center pageTitle">Shell basics</h1>
  <h3>Navigation commands</h3>
  <li><a href="#ls-section">ls</a> - list directory</li>
  <li><a href="#cd-section">cd</a> - change directory</li>
  <li><a href="#pwd-section">pwd</a> - print working directory</li>
  <h3>Manuplating files and directories</h3>
  <li><a href="#touch-section">touch</a> - create a new file</li>
  <li><a href="#mkdir-section">mkdir</a> - make a new directory</li>
  <li><a href="#cp-section">cp</a> - copy files or directories</li>
  <li><a href="#mv-section">mv</a> - move or rename file and directories</li>
  <li><a href="#rm-section">rm</a> - delete files or directories</li>
  <li><a href="#rmdir-section">rmdir</a> - remove a empty directory</li>
  <h3>Interacting with shell</h3>
  <li><a href="#clear-section">clear</a> - clears the terminal</li>
  <li><a href="#cat-section">cat</a> - outputs contents of a file to the terminal</li>


  <hr>


  <h2 class="center">Navigation commands</h2>


  <h1 class="bold pageTitle" id="cd-section">cd</h1>
  <h3 class="bold">cd - Change directory</h3>
  <span class="code">$ cd &lt;directory&gt;</span>
  <table class="indented-table">
    <thead>
      <tr>
        <th>Shortcut</th>
        <th>Result</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>cd</td>
        <td>Changes the working directory to your home directory.</td>
      </tr>
      <tr>
        <td>cd ..</td>
        <td>Changes the working directory to your parent directory.</td>
      </tr>
      <tr>
        <td>cd -</td>
        <td>Changes the working directory to the previous working directory.</td>
      </tr>
      <tr>
        <td>cd ~user_name</td>
        <td>Changes the working directory to the home directory of user_name.</td>
      </tr>
    </tbody>
  </table>



  
  <h1 class="bold pageTitle" id="ls-section">ls</h1>
  <h3 class="bold">ls - List directory contents</h3>
  <span class="code">$ ls</span>
  <span>Note:
  Absolute Pathnames - An absolute pathname begins with the root director
  Relative Pathnames - A relative pathname starts from the working directory</span>
  <table>
    <thead>
      <tr>
        <th>Option</th>
        <th>Long Option</th>
        <th>Meaning</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>-a</td>
        <td>--all</td>
        <td>List all files, even those with names that begin with a period, which are 
normally not listed (that is, hidden).</td>
      </tr>
      <tr>
        <td>-A</td>
        <td>--almost-all</td>
        <td>Lists all directories except . (current directory) and .. (parent directory)</td>
      </tr>
      <tr>
        <td>-d</td>
        <td>--directory</td>
        <td>Use this option in conjunction with the -l option to see details about the 
directory rather than its contents.</td>
      </tr>
      <tr>
        <td>-l</td>
        <td></td>
        <td>Display results in long format.</td>
      </tr>
      <tr>
        <td>-r</td>
        <td>--reverse</td>
        <td>Display the results in reverse order. Normally, ls displays its results 
in ascending alphabetical order</td>
      </tr>
    </tbody>
  </table>




  <h1 class="bold pageTitle" id="pwd-section">pwd</h1>
  <h3 class="bold">pwd - Print working directory</h3>
  <span class="code">$ pwd
/home/me</span>


  <hr>


  <h2 class="center">Manuplating files and directories</h2>


  <h1 class="bold pageTitle" id="touch-section">touch</h1>
  <h3 class="bold">touch - Updates the timestamp of a file, create a new file is it doesn't exist</h3>
  <span class="code">$ touch &lt;newfile.txt&gt;</span>
  This creates a new file named newfile.txt




  <h1 class="bold pageTitle" id="mkdir-section">mkdir</h1>
  <h3 class="bold">mkdir - Make a new directory</h3>
  The mkdir command is used to create directories. It works like this:
  <span class="code">$ mkdir dir1</span>
  would create a single directory named dir1, while the following:
  <span class="code">$ mkdir dir1 dir2 dir3</span>
  would create three directories named dir1, dir2, and dir3




  <h1 class="bold pageTitle" id="cp-section">cp</h1>
  <h3 class="bold">cp - Copy a file or a directory to another file or directory</h3>
  <span class="code">$ cp &lt;file1&gt; &lt;file2&gt;</span>

  <h4>cp Examples</h4>
  
  <table>
    <thead>
      <tr>
        <th>Command</th>
        <th>Result</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>cp file1 file2</td>
        <td>Copy file1 to file2, <strong>if file2 exists it is overwritten with the contents of 
file1.</strong> if it doesn't exist then it's created.</td>
      </tr>
      <tr>
        <td>cp -i file1 file2</td>
        <td>If file2 exists, the user is prompted before it's overwritten.</td>
      </tr>
      <tr>
        <td>cp file1 file2 dir1</td>
        <td>Copy file1 and file2 into directory dir1. The directory dir1 must already
exist.</td>
      </tr>
      <tr>
        <td>cp dir1/* dir2</td>
        <td>Copy all the contents of directory dir1 into directory dir2, only if directory
dir2 exists.</td>
      </tr>
      <tr>
        <td>cp -r dir1 dir2</td>
        <td>Copy all the contents of dir1 recursively into dir2. If dir2 doesn't exist, 
then create it and copy the files.</td>
      </tr>
    </tbody>
  </table>




  <h1 class="bold pageTitle" id="mv-section">mv</h1>
  <h3 class="bold">mv - Rename or move a file or directory</h3>
  The mv command performs both file moving and file renaming   
  <span class="code">$ mv item1 item2</span>
  to move or rename the file or directory item1 to item2 or:   
  <span class="code">$ mv item... directory</span>  
  to move one or more items from one directory to another.

  <h4>mv Command Examples</h4>

  <table>
    <thead>
      <tr>
        <th>Command</th>
        <th>Result</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>mv file1 file2</td>
        <td>Move file1 to file2. If file2 exists, it is overwritten with the contents of 
file1. If file2 does not exist, it is created. In either case, file1 ceases
to exist.</td>
      </tr>
      <tr>
        <td>mv -i file1 file2</td>
        <td>Same as the previous command, except that if file2 exists, the user is
prompted before it is overwritten.</td>
      </tr>
      <tr>
        <td>mv file1 file2 dir1</td>
        <td>Move file1 and file2 into directory dir1. The directory dir1 must already
exist</td>
      </tr>
      <tr>
        <td>mv dir1 dir2</td>
        <td>If directory dir2 does not exist, create directory dir2 and move the contents
of directory dir1 into dir2 and delete directory dir1. If directory dir2 does
exist, move directory dir1 (and its contents) into directory dir2.</td>
      </tr>
    </tbody>
  </table>



  <h1 class="bold pageTitle" id="rm-section">rm</h1>
  <h3 class="bold">rm - Remove a file or directory</h3>
  <span class="code">$ rm -rf &lt;file1&gt;</span>
  <table>
    <thead>
      <tr>
        <th>Option</th>
        <th>Long Option</th>
        <th>Meaning</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>-r</td>
        <td>--recursive</td>
        <td>Recursively delete directories. This means that if a directory being deleted
has subdirectories, delete them too. To delete a directory, this option must
be specified.</td>
      </tr>
      <tr>
        <td>-f</td>
        <td>--force</td>
        <td>Ignore nonexistent files and do not prompt. 
This overrides the --interactive option.</td>
      </tr>
    </tbody>
  </table>

  <h4>rm Examples</h4>
  <table>
    <thead>
      <tr>
        <th>Command</th>
        <th>Result</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>rm file1</td>
        <td>Delete file1 silently.</td>
      </tr>
      <tr>
        <td>rm -r file1 dir1</td>
        <td>Delete file1 and dir1 and its contents.</td>
      </tr>
      <tr>
        <td>rm -rf file1 dir1</td>
        <td>Same as the previous command, except that if either file1 or dir1 do not exist, 
rm will continue silently.</td>
      </tr>
    </tbody>
  </table>




  <h1 class="bold pageTitle" id="rmdir-section">rmdir</h1>
  <h3 class="bold">rmdir - Remove an empty directory</h3>

  <span class="code">$ rmdir dir1</span>
  <span>Deletes a empty directory</span>



  <hr>


  <h2 class="center">Interacting with shell</h2>
  
  <h1 class="bold pageTitle" id="clear-section">clear</span>
  <h3 class="bold">clear - Clear the terminal screen</h3>
  <span class="code">$ clear</span>



  <h1 class="bold pageTitle" id="cat-section">cat</span>
  <h3 class="bold">cat - prints the contents of the file on the terminal</h3>
  <span class="code">$ cat &lt;sometext.txt&gt;
  Some text in this file.</span>

  `,

  'arduino-cli': `
  <h1 class="center pageTitle">arduino-cli</h1>
  <li>Installation of <strong>arduino-cli</strong> software for the arduino UNO bloard</li>
  <h3>Download the script by clicking <a href='../scripts/install_arduino_cli.sh'>here</a> or use wget to install it.</h3>
  <span class="code">wget &lt;url&gt;</span>
  <h3>Install the script</h3>
  <span class="code">./install_arduino_cli.sh</span>
  <li>If you don't know what kind of board you have, simply connect it to the Raspberry Pi via USB,
  type the following command and examine the output:</li>
  <span class="code">arduino-cli board list</span>
  <h3>OUTPUT</h3>
  <span class="code">Port         Protocol Type              Board Name  FQBN            Core
/dev/ttyACM0 serial   Serial Port (USB) Arduino Uno arduino:avr:uno arduino:avr</span>
  <li>Here <span class='keyword'>/dev/ttyACM0</span> is the port number, you must remember this to upload you code next time.</li>
  `,
  
  'setup ssh keys': `
  <h1 class="center pageTitle">Generate SSH Keys</h1>
  <h3>Generate the ppublic and private keys for github</h3>
  <span class="code">ssh-keygen -t ed25519 -C "your_email@example.com"</span>
  <h3>Copy the public key and copy it over to github</h3>
  <span class="code">cat ~/.ssh/id_rsa.pub</span>
  `,
  
  'git basics': `
  <h1 class="center pageTitle">git-basics</h1>
  `,
  
  'pin numbers': `
  <h1 class="center pageTitle">pin-numbers</h1>
  `,
  
  'led': `
  <h1 class="center pageTitle">led</h1>
  `,

  'resistors': `
  <h1 class="center pageTitle">resistors</h1>
  `,

  'state machines': `
  <h1 class="center pageTitle">state-machines</h1>
  `,

  'bluetooth': `
  <h1 class="center pageTitle">bluetooth</h1>
  `,
  
  'class': `
  <h1 class="center pageTitle">class</h1>
  `,
  
  'object': `
  <h1 class="center pageTitle">object</h1>
  `,

  'buzzer': `
  <h1 class="center pageTitle">buzzer</h1>
  `,
  
  'pushbutton': `
  <h1 class="center pageTitle">pushbutton</h1>
  `,
  
  '7 segment display': `
  <h1 class="center pageTitle">7-segment-display</h1>
  `,
  
  'keypad': `
  <h1 class="center pageTitle">4x4-keypad</h1>
  `,

  'lcd': `
  <h1 class="center pageTitle">lcd-16x2</h1>
  `,
  
};

function displayText(contentId) {
    var articleHeaderBottom = document.querySelector(".articleHeaderBottom");
    articleHeaderBottom.innerHTML = contentId;

    var textBox = document.getElementById("textBox");
    textBox.innerHTML = textContents[contentId] || `<center><img src="../images/lock.png" alt="🔒"><center>`;
}


