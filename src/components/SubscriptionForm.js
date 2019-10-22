import React from "react"

import "./SubscriptionForm.css"

const SubscriptionForm = () => {
    return (
        <div>
            <link href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css" rel="stylesheet" type="text/css" />
            <div id="mc_embed_signup">
            <form action="https://gmail.us20.list-manage.com/subscribe/post?u=713705bdc72a78c241e9e0ce0&amp;id=ebefa458dc" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                <div id="mc_embed_signup_scroll">
                <label for="mce-EMAIL">Quero saber das novidades</label>
                <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required />
                <div id="hidden-field" aria-hidden="true">
                    <input type="text" name="b_713705bdc72a78c241e9e0ce0_ebefa458dc" tabindex="-1" value="" />
                </div>
                <div class="clear">
                <input  type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" />
                </div>
                </div>
            </form>
            </div>
        </div>
    )
}

export default SubscriptionForm;

