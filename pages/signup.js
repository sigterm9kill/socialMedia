import React from 'react';
import { Form, Button, Message, Segment, TextArea, Divider } from "semantic-ui-react";

import { HeaderMessage, FooterMessage } from "../components/Common/WelcomeMessage";

function Signup() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        bio: "",
        facebook: "",
        youtube: "",
        twitter: "",
        instagram: ""
    });

    const { name, email, password, bio } = user;

    const handleChange = e => {

        const { name, value } = e.target;
        setUser(prev => ({ ...prev, [name]: value }));
    }

    const [showSocialLinks, setShowSocialLinks] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);
    const [formLoading, setFormLoading] = useState(false);

    const [username, setUsername] = useState('');
    const [usernameLoading, setUsernameLoading] = useState(false);
    const [usernameAvailable, setUsernameAvailable] = useState(false);
    const handleSubmit = e => e.preventDefault();

    return (
        <>
            <HeaderMessage />
            <Form
                loading={formLoading}
                error={errorMsg !== null}
                onSubmit={handleSubmit}>
                <Message
                    error
                    header="Oops"
                    content={errorMsg}
                    onDismiss={() => setErrorMsg(null)} />

                <Segment>
                    <Form.Imput
                        lable="Name"
                        placeholder="Name"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        fluid
                        icon="user"
                        iconPosition="left"
                        required
                    />

                    <Form.Imput
                        lable="Email"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        fluid
                        icon="envelope"
                        iconPosition="left"
                        type="email"
                        required
                    />

                    <Form.Imput
                        lable="Password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        fluid
                        icon={{
                            name: "eye",
                            circular: "true",
                            link: true,
                            onClick: () => setShowPassword(!showPassword)
                        }}
                        iconPosition="left"
                        type={showPassword ? 'text' : "password"}
                        required
                    />


                </Segment>
            </Form>

            <FooterMessage />
        </>
    );
}

export default Signup;