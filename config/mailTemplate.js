const mailHtml = (message) => {
  return `<div style="padding: 20px; ">
      <div
        style="
          background-color: #fcfcfc;
          text-align: center;
          box-sizing: border-box;
          padding: 20px;
          border-radius: 20px; width: 350px;

          margin: auto;
        "
      >
        <div style="font-size: 18px; color: #5f138ee0; margin-top: 15px">
          ${message}
        </div>
      </div>
    </div>`;
};

export default mailHtml;
