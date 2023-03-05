import { PhoneCard } from './PhoneCard';
import { Contact } from './Contact';
import { Follow } from './Follow';
import { PoweredBy } from './PoweredBy';
import { CopyRight } from './CopyRight';
import {usefulPhones} from '../../assets/data/usefulPhones';

export const Footer = () => {

    return (
        <footer>
            <div className="footer">
                <div className="phones">
                    {
                        usefulPhones.map((element) => (
                            <PhoneCard key={element.phone} {...element} />
                        ))
                    }
                </div>
                <div className="section-contact-follow">
                    <Contact />
                    <Follow />
                </div>
                <PoweredBy />
            </div>
            <CopyRight />   
        </footer>
    )
}
