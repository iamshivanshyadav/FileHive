const createEmailTemplate = (
    emailFrom: string,

    downloadPageLink: string,
    fileName: string,
    fileSize: string
) => {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  <head>
   
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="x-apple-disable-message-reformatting" />

    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

    <title></title>

    <style type="text/css">
      @media only screen and (min-width: 620px) {
        .u-row {
          width: 600px !important;
        }
        .u-row .u-col {
          vertical-align: top;
        }

        .u-row .u-col-100 {
          width: 600px !important;
        }
      }

      @media (max-width: 620px) {
        .u-row-container {
          max-width: 100% !important;
          padding-left: 0px !important;
          padding-right: 0px !important;
        }
        .u-row .u-col {
          min-width: 320px !important;
          max-width: 100% !important;
          display: block !important;
        }
        .u-row {
          width: 100% !important;
        }
        .u-col {
          width: 100% !important;
        }
        .u-col > div {
          margin: 0 auto;
        }
      }
      body {
        margin: 0;
        padding: 0;
      }

      table,
      tr,
      td {
        vertical-align: top;
        border-collapse: collapse;
      }

      p {
        margin: 0;
      }

      .ie-container table,
      .mso-container table {
        table-layout: fixed;
      }

      * {
        line-height: inherit;
      }

      a[x-apple-data-detectors="true"] {
        color: inherit !important;
        text-decoration: none !important;
      }

      table,
      td {
        color: #ffffff;
      }
      @media (max-width: 480px) {
        #u_content_heading_5 .v-container-padding-padding {
          padding: 40px 10px 5px !important;
        }
        #u_content_heading_6 .v-container-padding-padding {
          padding: 0px 10px 10px !important;
        }
        #u_content_heading_6 .v-font-size {
          font-size: 24px !important;
        }
        #u_content_text_11 .v-container-padding-padding {
          padding: 10px 10px 20px !important;
        }
      }
    </style>

    <!--[if !mso]><!-->
    <link
      href="https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap"
      rel="stylesheet"
      type="text/css"
    />
    <!--<![endif]-->
  </head>

  <body
    class="clean-body u_body"
    style="
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: 100%;
      background-color: #ffffff;
      color: #ffffff;
    "
  >

    <table
      style="
        border-collapse: collapse;
        table-layout: fixed;
        border-spacing: 0;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        vertical-align: top;
        min-width: 320px;
        margin: 0 auto;
        background-color: #ffffff;
        width: 100%;
      "
      cellpadding="0"
      cellspacing="0"
    >
      <tbody>
        <tr style="vertical-align: top">
          <td
            style="
              word-break: break-word;
              border-collapse: collapse !important;
              vertical-align: top;
            "
          >
           

            <div
              class="u-row-container"
              style="padding: 0px; background-color: transparent"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #040718;
                  padding-bottom: 20px;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                  "
                >
          
                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div
                      style="
                        background-color: #040718;
                        height: 100%;
                        width: 100% !important;
                        border-radius: 0px;
                        -webkit-border-radius: 0px;
                        -moz-border-radius: 0px;
                      "
                    >
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                          border-radius: 0px;
                          -webkit-border-radius: 0px;
                          -moz-border-radius: 0px;
                        "
                      ><!--<![endif]-->
                        <table
                          id="u_content_heading_5"
                          style="font-family: 'Raleway', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="v-container-padding-padding"
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 60px 10px 5px;
                                  font-family: 'Raleway', sans-serif;
                                "
                                align="left"
                              >
                                <h1
                                  class="v-font-size"
                                  style="
                                    margin: 0px;
                                    color: #3595b3;
                                    line-height: 140%;
                                    text-align: center;
                                    word-wrap: break-word;
                                    font-size: 29px;
                                    font-weight: 400;
                                  "
                                >
                                  You Have Received a File
                                </h1>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table
                          id="u_content_heading_6"
                          style="font-family: 'Raleway', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="v-container-padding-padding"
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 0px 10px 30px;
                                  font-family: 'Raleway', sans-serif;
                                "
                                align="left"
                              >
                                <p
                                  class="v-font-size"
                                  style="
                                    margin: 0px;
                                    line-height: 90%;
                                    text-align: left;
                                    word-wrap: break-word;
                                    font-family: courier new, courier;
                                    font-size: 15px;
                                    font-weight: 400;
                                  "
                                >
                                  <br />
                                  ${emailFrom} shared a file with you.<br />${fileName}<br />${fileSize}
                            </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div
                          style=""
                          valign="top"
                          align="center"
                          bgcolor="#ffa526"
                        >
                          
                          <a
                            href="${downloadPageLink}"
                            target="_blank"
                            style="
                              border: solid 1px #ffa526;
                              border-radius: 5px;
                              box-sizing: border-box;
                              cursor: pointer;
                              display: inline-block;
                              font-size: 14px;
                              font-weight: bold;
                              margin: 0;
                              padding: 12px 25px;
                              text-decoration: none;
                              text-transform: capitalize;
                              background-color: #ffa526;
                              border-color: #ffc26d;
                              color: #ffffff;
                              transition: color 0.3s, cursor 0.3s;
                            "
                            >Go to Download Page</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="u-row-container"
              style="padding: 0px; background-color: transparent"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: transparent;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                  "
                >
                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div
                      style="
                        background-color: #040718;
                        height: 100%;
                        width: 100% !important;
                        border-radius: 0px;
                        -webkit-border-radius: 0px;
                        -moz-border-radius: 0px;
                      "
                    >
                      <div
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                          border-radius: 0px;
                          -webkit-border-radius: 0px;
                          -moz-border-radius: 0px;
                        "
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>



            <div class="u-row-container" style="padding: 0px; background-color: transparent">
              <div class="u-row" style="margin: 0 auto; min-width: 320px; max-width: 600px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent">
    <div style="border-collapse: collapse; display: table; width: 100%; height: 100%; background-color: transparent">
      <div class="u-col u-col-100" style="max-width: 320px; min-width: 600px; display: table-cell; vertical-align: top">
        <div style="background-color: #51e112; height: 100%; width: 100% !important; border-radius: 0px; -webkit-border-radius: 0px; -moz-border-radius: 0px">
          <div style="box-sizing: border-box; height: 100%; padding: 0px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-right: 0px solid transparent; border-bottom: 0px solid transparent; border-radius: 0px; -webkit-border-radius: 0px; -moz-border-radius: 0px">
            <!--<![endif]-->

            <table id="u_content_text_11" style="font-family: 'Raleway', sans-serif" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
              <tbody>
                <tr>
                  <td class="v-container-padding-padding" style="overflow-wrap: break-word; word-break: break-word; padding: 10px 100px; font-family: 'Raleway', sans-serif" align="left">
                    <div class="v-font-size" style="font-size: 14px; color: #000000; line-height: 170%; text-align: center; word-wrap: break-word">
                      <p style="line-height: 170%">Website is developed by - Shivansh Yadav</p>
                      <!-- Add social media links here -->
<a href="https://shivaay-portfolio.netlify.app/">Contact Me</a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  </div>
</div>


            
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>



`
}


export default createEmailTemplate;