$(document).ready(
    function () {
        //event handlers
        $("form").submit(getGreeting);

        //other functions

        function getGreeting(event) {
            event.preventDefault();

            var rank = $("input[name=rank]:checked").data("rank");

            //get name
            var firstName = $("#firstName").val();
            var lastName = $("#lastName").val();


            //color on answer
            if(rank=="Pvt.") {
                $("#result").css("color", "green");
            }
            else if (rank=="Capt.") {
                $("#result").css("color", "blue");
            }
            else {
                $("#result").css("color", "red");
            }



            //concatenate
            $("#result").text("Hello, " + " " + rank + " " + firstName + " " + lastName);
        }
    }

)