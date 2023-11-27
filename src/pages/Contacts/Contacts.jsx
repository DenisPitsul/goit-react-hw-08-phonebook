import classes from './Contacts.module.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ContactForm from 'components/ContactForm/ContactForm';
import LoaderComp from 'components/LoaderComp/LoaderComp';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { selectContacts, selectError, selectIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';

const Contacts = () => {
  const dispatch = useDispatch()
  const contacts = useSelector(selectContacts)
  const isLoading = useSelector(selectIsLoading)
  const error = useSelector(selectError)
    
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101'
      }}
    >
      <div className={classes.container}>
        <h1 className={classes.title}>Phonebook</h1>
        <ContactForm/>
        {
          isLoading && !error && <LoaderComp/>
        }
        {
          contacts.length > 0 && (
            <div>
              <h2 className={classes.contactsTitle}>Contacts</h2>
              <Filter/>
              <ContactList/>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Contacts;
