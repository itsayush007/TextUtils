import React from 'react'

function About(props) {
    return (
        <div className='container rounded' style={props.myStyle}>
            <h2>About Us</h2>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={props.myStyle}>
                            <strong>Key Features Of TextUtils </strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={props.myStyle}>

                            Welcome to TextUtils, an application designed to make your text editing tasks easier and more convenient. Our application offers several useful features that can assist you in managing and modifying your text according to your preferences.
                            <br /> <br />
                            Here are some of the key features of TextUtils:

                            <br /> <br />
                            1.Upper case conversion: Our application allows you to convert any text into uppercase letters.
                            This feature is helpful when you need to create headings, titles, or simply want to emphasize a particular phrase.
                            <br /> <br />
                            2.Lower case conversion: On the other hand, if you need to convert any text into lowercase letters,
                            TextUtils can help you with that as well. This feature is useful when you need to create a casual tone
                            or if you are writing for a more informal audience.
                            <br /> <br />
                            3.Clear text: With the click of a button, you can clear all the text in the editor,
                            making it easier to start fresh with a new document.
                            <br /> <br />
                            4.Remove extra spaces: TextUtils can help you remove any extra spaces from your text.
                            This feature is helpful when you need to format your text in a certain way or when you are copying text from another source.
                            <br /> <br />
                            5.Dark mode: For those who prefer a darker background while working
                            TextUtils provides a dark mode feature that can be easily toggled on or off.

                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={props.myStyle}>
                            <strong>Future Developments And Upgrades</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={props.myStyle}>
                            At TextUtils, we are constantly striving to improve and expand our application's features to make it more useful for our users. We believe that our application can be a valuable tool for anyone who needs to work with text, whether it is for personal or professional use.

                            Thank you for choosing TextUtils, and we hope that our application can help make your text editing tasks easier and more efficient.
                        </div>
                    </div>
                </div>
                {/* <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={props.myStyle}>
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={props.myStyle}>
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default About
