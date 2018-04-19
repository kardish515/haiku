import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Haiku } from './haiku.js';

$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    let line1 = $("#line1").val();
    let line2 = $("#line2").val();
    let line3 = $("#line3").val();
    let haiku = new Haiku(line1, line2, line3);
    if(haiku.haikuCheck()){
      $("#output").text("This is a haiku.");
    } else{
      $("#output").text("This is not a haiku.");
    }
  });
});
