function healthbot() {

    var tx = document.getElementById("note-textarea").value;
    document.getElementById("note-textarea").value = "";

    var msg = document.getElementById("msg ");
    var msg1 = document.getElementById("msg ");

    var txt = tx.toLowerCase();
    var img = document.getElementById('x');


    if (txt.match(/Hi/i) || txt.match(/hello/g) || txt.match(/oii/g)) {
        var arr = ["Hi", "Welcome to healthbot", "Hi buddy", "hello"];
        msg.innerText = arr[Math.floor(Math.random() * arr.length)];
        img.onload = function() {
            div.innerHTML += '<img src="' + img.src + '" />';
        };
        img.src = 'photos/hi.gif';


    } else if (txt.match(/what is your name/g) ||
        txt.match(/you male/g) || txt.match(/you female/g)) {
        var arr1 = ["I am Robot", "I am Healthbot", "I am bot"]
        msg.innerText = arr1[Math.floor(Math.random() * arr1.length)];
        img.onload = function() {
            div.innerHTML += '<img src="' + img.src + '" />';
        };


    } else if (txt.match(/headache/g) ||
        txt.match(/Headache/g) || txt.match(/head pain/g) || txt.match(/Headpain/g) || txt.match(/i have headpain/g) || txt.match(/headpain/g) || txt.match(/high headpain/g)) {
        msg.innerText = "Enter ";
        msg.innerHTML = msg.innerHTML + "<div><button style='color:blue;' type='button' onclick='yes()'>Male</button><button style='color:blue;' type='button' onfocus='No()'>Female</button></div>";
        img.onload = function() {
            div.innerHTML += '<img="' + img.src + ' " />';
        };
        img.src = 'photos/male or female.jpg';
        msg.onclick = function yes() {
            msg.innerText = "Enter Your age category 1(5 to 15)and 2(16 to above)?";
            img.onload = function() {
                div.innerHTML += '<img src="' + img.src + '" />';
            };
            img.src = 'photos/1_2.jpg';
            responsiveVoice.speak(msg.innerText);
            msg.innerHTML = msg.innerHTML + "<div><button style='color:blue;' type='button' onclick='yes()'>1</button><button style='color:blue;' type='button' onfocus='No()'>2</button></div>";
            msg.onclick = function yes() {
                msg.innerText = "Enter oneside or twosidepain?";
                img.onload = function() {
                    div.innerHTML += '<img src="' + img.src + '" />';
                };
                img.src = 'photos/left.jpg';
                responsiveVoice.speak(msg.innerText);
            };

        };
        msg.onfocus = function No() {
            msg.innerText = "Enter Your age category 1(5 to 15)and 2(16 to above)?";
            responsiveVoice.speak(msg.innerText);
            img.onload = function() {
                div.innerHTML += '<img src="' + img.src + '" />';
            };
            img.src = 'photos/1_2.jpg';
        };


    } else if (txt.match(/bodypain/g)) {
        msg.innerText =
            "Take the Medicine Information with hotwater:\n Name:Tylenol\nAbout:Tylenol is used for both pain and\n fever.";
        img.onload = function() {
            div.innerHTML += '<img src="' + img.src + '" />';
        };
        img.src = 'photos/file3.jpg';
        responsiveVoice.speak(msg.innerText);
    } else if (txt.match(/No/g) || (txt.match(/no/g))) {
        msg.innerHTML = "Type another symptoms in your body";
    } else if (txt.match(/Fever/g) ||
        txt.match(/fever/g)) {
        msg.innerText =
            "The following symptoms you have Enter yes or No:\n Temprature greater than 100.4 F,\n Shivering and chills,\n Headache.";
        msg.innerHTML = msg.innerHTML + "<div><button style='color:blue;' type='button' onclick='yes()'>yes</button></div>";
        img.onload = function() {
            div.innerHTML += '<img="' + img.src + ' " />';
        };
        msg.onclick = function yes() {
            msg.innerText =
                "Take the Medicine Information with hotwater:\n Name:Tylenol\nAbout:Tylenol is used for both pain and\n fever.";
            img.onload = function() {
                div.innerHTML += '<img src="' + img.src + '" />';
            };
            img.src = 'photos/file3.jpg';
            responsiveVoice.speak(msg.innerText);
        };

    } else if (txt.match(/coronavirus/g) ||
        txt.match(/corona/g)) {
        msg.innerText =
            "The following symptoms you have Enter yes or No:\n@runny nosesore \n@throat cough\n@fever\n@ difficulty breathing(severe cases)";
        msg.innerHTML = msg.innerHTML + "<div><button style='color:blue;' type='button' onclick='yes()'>yes</button></div>";
        img.onload = function() {
            div.innerHTML += '<img="' + img.src + ' " />';
        };
        msg.onclick = function yes() {
            msg.innerText =
                "Tips For Coronavirus Prevention:\n1.Wash your hands, don't touch your face, sneeze and cough responsibly\n2.Drink hot water";
            img.onload = function() {
                div.innerHTML += '<img src="' + img.src + '" />';
            };

            responsiveVoice.speak(msg.innerText);
        };

    } else if (txt.match(/body pain/g) ||
        txt.match(/bodypain/g)) {

        msg.innerText =
            "Take the Medicine Information with hotwater:\n Name:Tylenol\nAbout:Tylenol is used for both  pain and\n fever.";
        img.onload = function() {
            div.innerHTML += '<img src="' + img.src + '" />';
        };
        img.src = 'photos/file3.jpg';



    } else if (txt.match(/love you/g) || txt.match(/i love you/g)) {
        msg.innerText = "unfortunetly,i don 't have feelings";
        img.onload = function() {
            div.innerHTML += '<img="' + img.src + ' " />';
        };

    } else if (txt.match(/how old/g) || txt.match(/your age/g) ||
        txt.match(/how old are you/g)) {
        msg.innerHTML = "i never get old";

    } else if (txt.match(/help/g) || txt.match(/I need help/g)) {
        msg.innerHTML = "What kind of Health information needs?";
        img.onload = function() {
            div.innerHTML += '<img src="' + img.src + '" />';
        };
        img.src = 'photos/help.jpg';
    } else if (txt.match(/male/g) || txt.match(/Male/g)) {
        msg.innerHTML = "Enter Your age category 1(5 to 15)and 2(16 to above)?";

        img.onload = function() {
            div.innerHTML += '<img src="' + img.src + '" />';
        };

    } else if (txt.match(/oneside/g) || txt.match(/one/g)) {
        msg.innerHTML = "Enter left or right side?";


    } else if (txt.match(/twoside/g) || txt.match(/two/g)) {
        msg.innerHTML =
            " Take the Medicine Information with hotwater:\n Name:Crocin\nAbout:Crocin is headpain relif tablet";
        img.onload = function() {
            div.innerHTML += '<img src="' + img.src + '" />';
        };
        img.src = 'photos/headpain2.jpg';
    } else if (txt.match(/left/g) || txt.match(/Left/g) || txt.match(/leftside/g) || txt.match(
            /rightside/g) ||
        txt.match(/right/g)) {


        msg.innerHTML = "Enter time period of the headpain";
    } else if (txt.match(/1 hour/g) || txt.match(/hour/i) || txt.match(/ 3 hour/g) ||
        txt.match(/6hour/g)) {

        msg.innerHTML =
            " Take the Medicine Information after eating without fast food with hotwater  :\n Name:Paracetamol 500mg\n About:Paracetamol for common headpain and fever\ nTablet and effective pain relif ";
        img.onload = function() {
            div.innerHTML += '<img="' + img.src + ' " />';
        };
        img.src = 'photos/Headpain.jpg';



    } else if (txt.match(/day/g)) {

        msg.innerText =
            "Take the Medicine Information after eating without fast food  with hotwater:\n Name:Tylenol\nAbout:Tylenol is used for both  pain and\n fever.";
        img.onload = function() {
            div.innerHTML += '<img src="' + img.src + '" />';
        };
        img.src = 'photos/file3.jpg';



    } else if (txt.match(/quit/g) || txt.match(/bye/g) || txt.match(/Good bye/g) || txt.match(/exit/g)) {
        var arr2 = ["Bye,see you again", "Bye bye", "Bye", "Bye take here your health"];
        msg.innerHTML = arr2[Math.floor(Math.random() * arr2.length)];
        img.onload = function() {
            div.innerHTML += '<img="' + img.src + ' " />';
        };

        img.src = 'photos/bye1.gif';


    } else if (txt.match(/legpain/g) || txt.match(/chestpain/g) || txt.match(/muscular pain/g)) {
        msg.innerHTML =
            " Take the Medicine Information:\n Name:moov 50mg\n About: It offers quick relief from back pains,legpain and muscular pain ";
        img.onload = function() {
            div.innerHTML += '<img="' + img.src + ' " />';
        };
        img.src = 'photos/moov.jpg';

    } else if (txt.match(/gastric pain/g) || txt.match(/stomach pain/g) || txt.match(/Stomachpain/g)) {
        msg.innerHTML =
            " Take the Medicine Information:\n Name: Pantoprazole \n About: Pantoprazole is a proton pump inhibitor that decreases the amount of acid produced in the stomach. Pantoprazole is used to treat  in adults and children who are at least 5 years old. ";
        img.onload = function() {
            div.innerHTML += '<img="' + img.src + ' " />';
        };
        img.src = 'photos/stomach.jpg';

    } else if (txt.match(/malaria/g)) {
        msg.innerText =
            " Enter yes or no the following Symptoms\nFever that runs high for 2-3 days\n  Unbearable headaches\n Muscle pain and inability to do physical tasks – Severe chills\n Heavy sweating at times– Fatigue and tiredness \nLoose motions.";
        msg.innerHTML = msg.innerHTML + "<div><button style='color:blue;' type='button' onclick='yes()'>yes</button></div>";
        msg1.innerHTML = msg.innerHTML + "<div><button style='color:blue;' type='button' onclick='yes()'>No</button></div>";

        img.onload = function() {
            div.innerHTML += '<img="' + img.src + ' " />';
        };
        msg.onclick = function yes() {
            msg.innerText = "Take the madicine Name:Maloff Protect \n information:Maloff Protect is used to prevent malaria.";
            img.onload = function() {
                div.innerHTML += '<img="' + img.src + ' " />';
            };
            img.src = 'photos/malaria.jpeg';
            responsiveVoice.speak(msg.innerText);
        };
        msg1.onclick = function yes() {
            msg.innerText =
                " Enter symptoms in your body? ";

            responsiveVoice.speak(msg.innerText);


        }






    } else if (txt.match(/leg pain/g) || txt.match(/chest pain/g) || txt.match(/muscular pain/g) || txt.match(/Leg pain/g)) {
        msg.innerHTML =
            " Take the Medicine Information:\n Name:Moov 50mg\n About: It offers quick relief from back pains,legpain and muscular pain ";
        img.onload = function() {
            div.innerHTML += '<img="' + img.src + ' " />';
        };
        img.src = 'photos/moov.jpg';
    } else if (txt.match(/Vomiting/g) || txt.match(/vomite/g) || txt.match(/vomiting/)) {
        msg.innerText = "The following symptom you have enter yes or enter another symptom :Nausea or recurrent upset stomach,Abdominal bloating, Abdominal pain,Vomiting";
        msg.innerHTML = msg.innerHTML + "<div><button style='color:blue;' type='button' onclick='yes()'>Yes</button></div>";
        msg.onclick = function yes() {
            msg.innerText =
                " Take the Medicine Information:\n Name:Tab Emeset 50mg\n About: Emeset 4 MG Tablet is an antiemetic agent used to treat nausea and vomiting caused due to certain medical conditions. ";
            img.onload = function() {
                div.innerHTML += '<img="' + img.src + ' " />';
            };
            responsiveVoice.speak(msg.innerText);
            img.src = 'photos/IMG_20200310_213827.jpg';
        }
    } else if (txt.match(/Cough/g) || txt.match(/cough/g)) {
        msg.innerText = "Symptoms and signs of chronic cough:\n Sore throat\n Runny or stuffy nose\n Heartburn\nA bad taste in the mouth.You have this Symptoms enter yes or type your symptoms in your body ";
        img.onload = function() {
            div.innerHTML += '<img="' + img.src + ' " />';
        };
        msg.innerHTML = msg.innerHTML + "<div><button style='color:blue;' type='button' onclick='yes()'>Yes</button></div>";
        msg.onclick = function yes() {
            msg.innerText =
                " Take the Medicine Information with hotwater:\n Name:Benadryl\n About: Benadryl is used to treat sneezing, cough,runny nose, watery eyes, skin rash,  and other cold or allergy symptoms. ";
            img.onload = function() {
                div.innerHTML += '<img="' + img.src + ' " />';
            };
            responsiveVoice.speak(msg.innerText);
            img.src = 'photos/cough.jpeg';

        }
    } else if (txt.match(/cold/g) || txt.match(/i have cold/g)) {
        msg.innerText = "The following Symptoms you have enter yes or type another your symptoms in your body:\n@ Cough\n@sore throat\n@ runny nose ";
        img.onload = function() {
            div.innerHTML += '<img="' + img.src + ' " />';
        };
        msg.innerHTML = msg.innerHTML + "<div><button style='color:blue;' type='button' onclick='yes()'>Yes</button></div>";
        msg.onclick = function yes() {
            msg.innerText =
                " Take the Medicine Information with hotwater:\n Name:Chlorpheniramine\n About: Chlorpheniramine is used to treat runny nose, sneezing, itching, and watery eyes caused by allergies, the common cold. ";
            img.onload = function() {
                div.innerHTML += '<img="' + img.src + ' " />';
            };
            responsiveVoice.speak(msg.innerText);
            img.src = 'photos/cold.jpeg';

        }
    } else if (txt.match(/skin damage and eye damage/g) || txt.match(/eye damage/g) || txt.match(/skin damage/g) || txt.match(/skindamage/g) || txt.match(/skin cancer/g)) {
        var msg1 = document.getElementById("msg ");
        msg.innerText = "you attack with Leprosy disease.The disease mainly affects the skin, the peripheral nerves, mucosal surfaces of the upper respiratory tract and the eyes.\nclick ";

        msg.innerHTML = msg.innerHTML + "<div><button style='color:blue;' type='button' onclick='yes()'>Ok</button></div>";

        img.onload = function() {
            div.innerHTML += '<img="' + img.src + ' " />';
        };


        msg.onclick = function yes() {
            msg.innerText =
                " Take the Medicine Information with hotwater:\n Name:Dapsone\n About: This medication is used to treat a certain type of skin damages. ";
            img.onload = function() {
                div.innerHTML += '<img="' + img.src + ' " />';
            };
            responsiveVoice.speak(msg.innerText);
            img.src = 'photos/skin.jpg';


        }

    } else if (txt.match(/aids/g) || txt.match(/i have hiv/g) || txt.match(/hiv/g)) {
        msg.innerText = "The following Symptoms you have enter yes or type another your symptoms in your body:\n@ Being tired all the time\n@Fever that lasts more than 10 days\n@Night sweats\n@Weight loss  ";
        img.onload = function() {
            div.innerHTML += '<img="' + img.src + ' " />';
        };
        msg.innerHTML = msg.innerHTML + "<div><button style='color:blue;' type='button' onclick='yes()'>Yes</button></div>";
        msg.onclick = function yes() {
            msg.innerText =
                " Take the Medicine Information with hotwater:\n Name:Zidovudine\n About:It works by decreasing the amount of HIV in blood. ";
            img.onload = function() {
                div.innerHTML += '<img="' + img.src + ' " />';
            };
            responsiveVoice.speak(msg.innerText);
            img.src = 'photos/hiv.jpg';


        }
    } else if (txt.match(/chickenpox/gi) || txt.match(/i have chickenpox/gi) || txt.match(/Chickenbox/gi)) {
        msg.innerText = "The following Symptoms you have enter yes or type another your symptoms in your body:a rash that turns into itchy,  The rash may first show up on the chest, back, and face, and then spread over the entire body, including inside the mouth, eyelids, or genital area. ";
        img.onload = function() {
            div.innerHTML += '<img="' + img.src + ' " />';
        };
        msg.innerHTML = msg.innerHTML + "<div><button style='color:blue;' type='button' onclick='yes()'>Yes</button></div>";
        msg.onclick = function yes() {
            msg.innerText =
                " Enter stages of chickenpox :@stage1:10 to 12 hours\n@stage2:four to six days\n@stage3:as early as 10 days";
            img.onload = function() {
                div.innerHTML += '<img="' + img.src + ' " />';
            };
            responsiveVoice.speak(msg.innerText);


        }
    } else if (txt.match(/stage1/g)) {
        msg.innerText = "The following Symptoms you have enter yes or type another your symptoms in your body:headache, nausea, muscle aches, and malaise. A runny nose and cough are also common. ";
        img.onload = function() {
            div.innerHTML += '<img="' + img.src + ' " />';
        };
        msg.innerHTML = msg.innerHTML + "<div><button style='color:blue;' type='button' onclick='yes()'>Yes</button></div>";
        msg.onclick = function yes() {
            msg.innerText =
                " Take the Medicine Information with hotwater:\n Name: Acivir 400 MG\n About: It is an antiviral agent which is used in the treatment of infections caused by herpes virus such as chickenpox and herpes zoster. ";
            img.onload = function() {
                div.innerHTML += '<img="' + img.src + ' " />';
            };

            responsiveVoice.speak(msg.innerText);
            img.src = 'photos/checken box 4 to 12 hrs.jpg';


        }

    } else if (txt.match(/stage2/g)) {
        msg.innerText = "The following Symptoms you have enter yes or type another your symptoms in your body:Small red bumps.\n@ Thin - walled water blisters,\n@Cloudy blisters,\n@Open sores, and finally\n@Dry brown crusts. ";
        img.onload = function() {
            div.innerHTML += '<img="' + img.src + ' " />';
        };
        msg.innerHTML = msg.innerHTML + "<div><button style='color:blue;' type='button' onclick='yes()'>Yes</button></div>";
        msg.onclick = function yes() {
            msg.innerText =
                " Take the Medicine Information :\n Name: Acivir 800 mg\n About: It is an antiviral agent which is used in the treatment of infections caused by herpes virus such as chickenpox and herpes zoster. ";
            img.onload = function() {
                div.innerHTML += '<img="' + img.src + ' " />';
            };

            responsiveVoice.speak(msg.innerText);
            img.src = 'photos/chicken stage2.png';


        }

    } else if (txt.match(/stage3/g)) {
        msg.innerText = "The following Symptoms you have enter yes or type another your symptoms in your body:\n@Fever,\n@Loss of appetite,\n@Headache,\n@Tiredness and a general feeling of being unwell  ";
        img.onload = function() {
            div.innerHTML += '<img="' + img.src + ' " />';
        };
        msg.innerHTML = msg.innerHTML + "<div><button style='color:blue;' type='button' onclick='yes()'>Yes</button></div>";
        msg.onclick = function yes() {
            msg.innerText =
                " Take the Medicine Information :\n Name: Acivir 1000 mg\n About: It is an antiviral agent which is used in the treatment of infections caused by herpes virus such as chickenpox and herpes zoster. ";
            img.onload = function() {
                div.innerHTML += '<img="' + img.src + ' " />';
            };

            responsiveVoice.speak(msg.innerText);
            img.src = 'photos/chicken stage2.png';


        }

    } else if (txt.match(/cancers/g)) {


        msg.innerHTML = "Enter what kind of cancer: \n@brain tumor\n@liver cancer\n@skin cancer\n @blood cancer";
    } else if (txt.match(/brain/g) || txt.match(/brain tumor/g)) {
        msg.innerText = "The following Symptoms you have enter yes or type another your symptoms in your body:\n headaches,\n@changes in personality\n@vision problems\n@memory loss\n@mood swings.";

        img.onload = function() {
            div.innerHTML += '<img="' + img.src + ' " />';
        };
        msg.innerHTML = msg.innerHTML + "<div><button style='color:blue;' type='button' onclick='yes()'>Yes</button></div>";
        msg.onclick = function yes() {
            msg.innerText =
                " Take the Medicine and injection Information :\n Name: Bevacizumab\n About: For cancer it is given by slow injection into a vein and used for colon cancer, lung cancer, glioblastoma, and renal-cell carcinoma. ";
            img.onload = function() {
                div.innerHTML += '<img="' + img.src + ' " />';
            };

            responsiveVoice.speak(msg.innerText);
            img.src = 'photos/brain cancer.jpg';


        }
    } else if (txt.match(/blood cancer/g) || txt.match(/blood/g)) {
        msg.innerText = "The following Symptoms you have enter yes or type another your symptoms in your body:\n headaches,\n@changes in personality\n@vision problems\n@memory loss\n@mood swings.";

        img.onload = function() {
            div.innerHTML += '<img="' + img.src + ' " />';
        };
        msg.innerHTML = msg.innerHTML + "<div><button style='color:blue;' type='button' onclick='yes()'>Yes</button></div>";
        msg.onclick = function yes() {
            msg.innerText =
                " Take the Medicine and injection Information :\n Name: Bendamustine\n About: It is used to increase your new blood cells ";
            img.onload = function() {
                div.innerHTML += '<img="' + img.src + ' " />';
            };

            responsiveVoice.speak(msg.innerText);
            img.src = 'photos/blood cancer.jfif';


        }
    } else {
        msg.innerHTML = "I am confused!";
        img.onload = function() {
            div.innerHTML += '<img src="' + img.src + '" />';
        };
    }

    responsiveVoice.speak(msg.innerText);
};

try {
    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    var recognition = new SpeechRecognition();
} catch (e) {
    console.error(e);
    $('.no-browser-support').show();
    $('.app').hide();
}


var noteTextarea = $('#note-textarea');
var instructions = $('#recording-instructions');
var notesList = $('ul#notes');

var noteContent = '';

// Get all notes from previous sessions and display them.
var notes = getAllNotes();
renderNotes(notes);



/*-----------------------------
      Voice Recognition 
------------------------------*/

// If false, the recording will stop after a few seconds of silence.
// When true, the silence period is longer (about 15 seconds),
// allowing us to keep recording even when the user pauses. 
recognition.continuous = true;

// This block is called every time the Speech APi captures a line. 
recognition.onresult = function(event) {

    // event is a SpeechRecognitionEvent object.
    // It holds all the lines we have captured so far. 
    // We only need the current one.
    var current = event.resultIndex;

    // Get a transcript of what was said.
    var transcript = event.results[current][0].transcript;

    // Add the current transcript to the contents of our Note.
    // There is a weird bug on mobile, where everything is repeated twice.
    // There is no official solution so far so we have to handle an edge case.
    var mobileRepeatBug = (current == 1 && transcript == event.results[0][0].transcript);

    if (!mobileRepeatBug) {
        noteContent += transcript;
        noteTextarea.val(noteContent);
    }
};

recognition.onstart = function() {
    instructions.alert('Voice start');
}

recognition.onspeechend = function() {
    instructions.alert('Voice off');
}

recognition.onerror = function(event) {
    if (event.error == 'no-speech') {
        instructions.text('No speech was detected. Try again.');
    };
}



/*-----------------------------
      App buttons and input 
------------------------------*/

$('#start-record-btn').on('click', function(e) {
    if (noteContent.length) {
        noteContent += ' ';



        // Save note to localStorage.
        // The key is the dateTime with seconds, the value is the content of the note.
        saveNote(new Date().toLocaleString(), noteContent);

        // Reset variables and update UI.
        noteContent = '';
        renderNotes(getAllNotes());
        noteTextarea.val('');
        instructions.alert('Note saved successfully.');
    }
    recognition.start();
});


$('#pause-record-btn').on('click', function(e) {
    recognition.stop();
    instructions.alert('Voice pause.');
});

// Sync the text inside the text area with the noteContent variable.
noteTextarea.on('input', function() {
    noteContent = $(this).val();
})

$('#save-note-btn').on('click', function(e) {
    recognition.start();

    if (!noteContent.length) {
        instructions.alert('Could not save empty note. Please add a message to your note.');
    } else {
        // Save note to localStorage.
        // The key is the dateTime with seconds, the value is the content of the note.
        saveNote(new Date().toLocaleString(), noteContent);

        // Reset variables and update UI.
        noteContent = '';
        renderNotes(getAllNotes());
        noteTextarea.val('');
        instructions.alert('Note saved successfully.');
    }

})


noteTextarea.on('click', function(e) {
    e.preventDefault();
    var target = $(e.target);

    // Listen to the selected note.
    if (target.hasClass('listen-note')) {
        var content = target.closest('.note').find('.content').text();
        readOutLoud(content);
    }

    // Delete note.
    if (target.hasClass('delete-note')) {
        var dateTime = target.siblings('.date').text();
        deleteNote(dateTime);
        target.closest('.note').remove();
    }
});



/*-----------------------------
      Speech Synthesis 
------------------------------*/

function readOutLoud(message) {
    var speech = new SpeechSynthesisUtterance();

    // Set the text and voice attributes.
    speech.text = message;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}



/*-----------------------------
      Helper Functions 
------------------------------*/

function renderNotes(notes) {
    var html = '';
    if (notes.length) {
        notes.forEach(function(note) {
            html += `<li class="note">
        <p class="header">
          <span class="date">${note.date}</span>
          <a href="#" class="listen-note" title="Listen to Note">Listen to Note</a>
          <a href="#" class="delete-note" title="Delete">Delete</a>
        </p>
        <p class="content">${note.content}</p>
      </li>`;
        });
    } else {
        html = '<li><p class="content">You don\'t have any notes yet.</p></li>';
    }
    notesList.html(html);
}


function saveNote(dateTime, content) {
    localStorage.setItem('note-' + dateTime, content);
}


function getAllNotes() {
    var notes = [];
    var key;
    for (var i = 0; i < localStorage.length; i++) {
        key = localStorage.key(i);

        if (key.substring(0, 5) == 'note-') {
            notes.push({
                date: key.replace('note-', ''),
                content: localStorage.getItem(localStorage.key(i))
            });
        }
    }
    return notes;
}


function deleteNote(dateTime) {
    localStorage.removeItem('note-' + dateTime);
}