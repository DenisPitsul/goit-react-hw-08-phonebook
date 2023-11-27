import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";
import classes from './App.module.css'
import { useDispatch, useSelector } from "react-redux";
import { selectContacts, selectError, selectIsLoading } from "redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";
import LoaderComp from "./LoaderComp/LoaderComp";

const App = () => {
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

export default App;
