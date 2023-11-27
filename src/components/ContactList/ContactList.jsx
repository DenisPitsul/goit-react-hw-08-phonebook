import { selectFilteredContacts } from 'redux/selectors';
import classes from './ContactList.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';

const ContactList = () => {
    const filteredContacts = useSelector(selectFilteredContacts)
    const dispatch = useDispatch()

    const onRemove = (id) => {
        dispatch(deleteContact(id))
    }

    return (
        <ul className={classes.contactList}>
            {
                filteredContacts.map(contact => 
                    <li key={contact.id} className={classes.contactItem}>
                        <p className={classes.contactItemText}>{contact.name}: {contact.phone}</p>
                        <button 
                            type='button' 
                            className={classes.removeBtn} 
                            onClick={() => onRemove(contact.id)}>Remove</button>
                    </li>    
                )
            }
        </ul>
    )
}

export default ContactList;