import React, { useState } from "react";
import * as Survey from "survey-react";
import * as widgets from "surveyjs-widgets";
import "survey-react/survey.css";
import * as SurveyPDF from "survey-pdf";

import "jquery-ui/themes/base/all.css";
import "nouislider/distribute/nouislider.css";
import "select2/dist/css/select2.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css";

import "jquery-bar-rating/dist/themes/css-stars.css";

import $ from "jquery";
import "jquery-ui/ui/widgets/datepicker.js";
import "select2/dist/js/select2.js";
import "jquery-bar-rating";

import "pretty-checkbox/dist/pretty-checkbox.css";

import { json } from "./survey_json.js";

//import "icheck/skins/square/blue.css";
window["$"] = window["jQuery"] = $;
//require("icheck");

export { MyQuestion } from "./MyQuestion";

Survey.StylesManager.applyTheme("default");

//widgets.icheck(Survey, $);
widgets.prettycheckbox(Survey);
widgets.select2(Survey, $);
widgets.inputmask(Survey);
widgets.jquerybarrating(Survey, $);
widgets.jqueryuidatepicker(Survey, $);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey, $);
//widgets.signaturepad(Survey);
widgets.sortablejs(Survey);
widgets.ckeditor(Survey);
widgets.autocomplete(Survey, $);
widgets.bootstrapslider(Survey);

var survey = new Survey.Model(json);

const ref = React.createRef();

function saveSurveyToPdf(filename, surveyModel, saveType, headerText) {
  var surveyPDF = new SurveyPDF.SurveyPDF(json);
  surveyPDF._haveCommercialLicense = true;
  surveyPDF.data = surveyModel.data;

  if (headerText) {
    surveyPDF.onRenderHeader.add(function (survey, canvas) {
      canvas.drawText({ text: headerText, fontSize: 16 });
    });
  }

  if (saveType === "saveAsFile") {
    surveyPDF.save(filename);
  } else if (saveType === "saveAsString") {
    surveyPDF.raw().then(function (text) {
      var file = new Blob([text], { type: "application/pdf" });
      var a = document.createElement("a");
      a.href = URL.createObjectURL(file);
      a.download = filename;
      document.body.appendChild(a);
      a.click();
    });
  } else if (saveType === "saveAsBlob") {
    surveyPDF.raw("bloburl").then(function (bloburl) {
      var a = document.createElement("a");
      a.href = bloburl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
    });
  } else {
    var oldFrame = document.getElementById("pdf-preview-frame");
    if (oldFrame) oldFrame.parentNode.removeChild(oldFrame);
    surveyPDF.raw("dataurlstring").then(function (dataurl) {
      var pdfEmbed = document.createElement("embed");
      pdfEmbed.setAttribute("id", "pdf-preview-frame");
      pdfEmbed.setAttribute("type", "application/pdf");
      pdfEmbed.setAttribute("style", "width:100%");
      pdfEmbed.setAttribute("height", 200);
      pdfEmbed.setAttribute("src", dataurl);
      var previewDiv = document.getElementById("pdf-preview");
      previewDiv.appendChild(pdfEmbed);
    });
  }
}

export function SurveyPage() {
  let [numerator, setNumerator] = useState(null);
  let [denominator, setDenominator] = useState(null);
  let [score, setScore] = useState(null);

  function onComplete(result) {
    console.log("Complete! " + result);
  }

  const saveAsPdf = () => {
    const header =
      score === null ? "" : `Score: ${score}% (${numerator}/${denominator})`;
    saveSurveyToPdf("op-maturity-scorecard.pdf", survey, "saveAsFile", header);
  };

  function onValueChanged(result) {
    const data = result.getPlainData();
    const num = data.filter((d) => d.value === true).length;
    const den = data.filter((d) => d.value !== undefined).length;
    if (den && den > 0) {
      score = ((num / den) * 100).toFixed(0);
    } else {
      score = null;
    }
    setNumerator(num);
    setDenominator(den);
    setScore(score);
    window.data = data;
  }

  return (
    <div className="container">
      <h2>
        Score
        {score !== null && score != undefined && (
          <React.Fragment>
            : {score}% ({numerator}/{denominator})
          </React.Fragment>
        )}
        <input
          style={{ float: "right", fontSize: "18px" }}
          className="sv_next_btn"
          type="button"
          onClick={saveAsPdf}
          value="Export to Pdf"
        />
      </h2>
      <div></div>
      <Survey.Survey
        model={survey}
        onComplete={onComplete}
        onValueChanged={onValueChanged}
      />
    </div>
  );
}
