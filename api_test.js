var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Bearer K1VYSFFB-2VCNrroTEH__ycPgj0F-Jdg");
myHeaders.append("Cookie", "CraftSessionId=di3ntsfgbpaqmsfug4c4sqv0u9; CRAFT_CSRF_TOKEN=f1c70c90430442d5ac212d288ab893dd2fedbcd885eb953b47e9b18a8869028ca%3A2%3A%7Bi%3A0%3Bs%3A16%3A%22CRAFT_CSRF_TOKEN%22%3Bi%3A1%3Bs%3A40%3A%22SDq3TlIkCb0KbQ4cqYmbCwicY6SpV-ZFeworgAt9%22%3B%7D");

var graphql = JSON.stringify({
  query: "query($page_id:[QueryArgument]){\r\n  entries(section: \"pages\", id: $page_id, orderBy: \"dateCreated DESC\") {\r\n    dateCreated @formatDateTime(format: \"Y-m-d\")\r\n    title\r\n    ... on pages_pages_Entry {\r\n      contentBuilder {\r\n        ... on contentBuilder_text_BlockType {\r\n          typeHandle\r\n          richText\r\n          backgroundColour\r\n        }\r\n        ... on contentBuilder_twoColumnLayout_BlockType {\r\n          typeHandle\r\n          width\r\n          backgroundColour\r\n          row {\r\n            ... on row_BlockType {\r\n              column1 {\r\n                ... on column1_text_BlockType {\r\n                  typeHandle\r\n                  textContent\r\n                }\r\n                ... on column1_image_BlockType {\r\n                  typeHandle\r\n                  file {\r\n                    title\r\n                    url\r\n                    filename\r\n                    focalPoint\r\n                  }\r\n                }\r\n                ... on column1_contactForm_BlockType {\r\n                  typeHandle\r\n                  header\r\n                  form {\r\n                    formTemplate\r\n                  }\r\n                }\r\n              }\r\n              column2 {\r\n                ... on column2_text_BlockType {\r\n                  typeHandle\r\n                  textContent\r\n                }\r\n                ... on column2_image_BlockType {\r\n                  typeHandle\r\n                  file {\r\n                    title\r\n                    url\r\n                    filename\r\n                    focalPoint\r\n                  }\r\n                }\r\n                ... on column2_contactForm_BlockType {\r\n                  typeHandle\r\n                  header\r\n                  form {\r\n                    formTemplate\r\n                  }\r\n                }\r\n              }\r\n            }\r\n          }\r\n        }\r\n        ... on contentBuilder_suburbListing_BlockType {\r\n          typeHandle\r\n          suburbs {\r\n            title\r\n            ... on suburb_Category {\r\n              defaultPageImage {\r\n                url\r\n                filename\r\n                title\r\n                focalPoint\r\n              }\r\n            }\r\n          }\r\n        }\r\n        ... on contentBuilder_gridListing_BlockType {\r\n          typeHandle\r\n          heading\r\n          listingType\r\n          backgroundColour\r\n          limit\r\n          displayOrder\r\n        }\r\n        ... on contentBuilder_jobListing_BlockType {\r\n          typeHandle\r\n          suburb {\r\n            title\r\n            ... on suburb_Category {\r\n              defaultPageImage {\r\n                url\r\n                filename\r\n                focalPoint\r\n                title\r\n              }\r\n            }\r\n          }\r\n        }\r\n        ... on contentBuilder_quoteSlider_BlockType {\r\n          typeHandle\r\n          heading\r\n          quote {\r\n            ... on quote_BlockType {\r\n              quoteText\r\n              author\r\n              date\r\n            }\r\n          }\r\n          backgroundColour\r\n          backgroundImage {\r\n            url\r\n            filename\r\n            focalPoint\r\n            title\r\n          }\r\n        }\r\n        ... on contentBuilder_contactForm_BlockType {\r\n          typeHandle\r\n          heading\r\n          backgroundColour\r\n          freeform {\r\n            formTemplate\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}",
  variables: {}
})
var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: graphql,
  redirect: 'follow'
};

fetch("http://localhost/api", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));