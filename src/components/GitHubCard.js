// GitHubCard.js
import React from "react";
import { Card } from "react-bootstrap";

function GitHubCard() {
    return (
        <Card style={{ width: "18rem" }}>
            {/* Add your GitHub username */}
            <Card.Title>GitHub Lucia</Card.Title>

            {/* Add a photo of you */}
            <Card.Img variant="top" src="https://plus.unsplash.com/premium_photo-1661943864527-d714736dfd16?" alt="Your Photo" />

            {/* Add a blurb about you */}
            <Card.Body>
                <Card.Text>
                    This is a blurb about me. I am a passionate developer who
                    loves coding.
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default GitHubCard;
