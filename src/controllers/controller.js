import mongoose from 'mongoose';
import { QuoteSchema } from '../models/quoteSchema';

const Quote = mongoose.model('Quote', QuoteSchema, 'quote');

export const addQuote = (req, res) => {
    console.log(req.body)
    const newQuote = new Quote(req.body);
    newQuote.save((err, quote) => {
        if (err) {
            return res.send(err);
        }
        return res.status(201).json(quote);
    });
};

export const getAllQuotes = (req, res) => {
    Quote.find({}, (err, quotes) => {
        if (err) {
          return res.send(err);
        }
        return res.status(200).send(quotes)
    });
    /*
    return res.status(200).send('HULLO SHUBHA')
    */
};

// export const getPatients = (req, res) => {
//     Person.paginate({}, { page: req.params.pageNo, limit: 10, sort: { last_name: 'asc' }}, (err, result) => {
//         if (err) {
//           return res.send(err);
//         }
//         return res.json(result)
//     });
// };

// export const getPatientWithId = (req, res) => {
//     // find the person by their patient ID
//     Person.find({id: req.params.patientId}, (err, person) => {
//         if (err) {
//             res.send(err);
//         }
//         return res.status(200).send(person);
//     });
// }

// export const updatePatient = (req, res) => {
//     // TODO? if a coworker sends bad body data, do nothing and don't update record?
//     const patientId = req.params.patientId;

//     // check if date is valid date to be updated
//     const dob = req.body.dob;
//     if (dob != null) {
//         const valid = isValidDate(dob);
//         if (valid == false) {
//             return res.status(400).send('BADDATE in the update request - date not a valid date')
//         }
//         const age = getPatientAge(dob);
//         if (age < 8) {
//             return res.status(400).send('BADDATE in the update request - patient is younger than 8 and should be deleted from the database')
//         }
//     }

//     Person.findOneAndUpdate({ id: req.params.patientId}, req.body, { new: true }, (err, patient) => {
//         if (err) {
//             return res.send(err);
//         }
//         // check to make sure person is found via their patientId
//         if ((Array.isArray(patient) && patient.length == 0) || patient == null) {
//             return res.status(400).send('patient to be deleted not found with the patientId provided in the request')
//         } else {
//             return res.status(200).send({message: 'Success, updated patient record', patientId: patientId });
//         }
//     });
// }

// export const deletePatient = (req, res) => {
//     // keep patientId so if successfully deleted, can send patientId in response
//     const id = req.params.patientId;
//     Person.findOneAndRemove({ id: req.params.patientId }, (err, patient) => {
//         if (err) {
//             return res.send(err);
//         }
//         // check to make sure person is found via their patientId
//         if ((Array.isArray(patient) && patient.length == 0) || patient == null) {
//             return res.status(400).send('patient to be deleted not found with the patientId provided in the request')
//         } else {
//             return res.status(202).send({ message: 'Success! deleted patient', patientId: id });
//         }
//     });
// }

// export const getPatientAgeWithId = (req, res) => {
//     const patientId = req.params.patientId;
//     Person.find({id: req.params.patientId}, (err, patient) => {
//         if(err) {
//             return res.send(err)
//         }
//         console.log(patient)
//         // check to make sure person is found via their patientId
//         if (Array.isArray(patient) && patient.length == 0) {
//             return res.status(400).send('person not found with the patientId provided in the request')
//         } else {
//             // check dob is valid
//             const validDob = isValidDate(patient.dob)
//             const age = getPatientAge(patient.dob)
//             if (validDob == false) {
//               // this should only happen if there was an invalid record that prexisted
//               // in the database as we check for valid date strings when adding
//               // new patient records in this API
//               return res.status(500).send('Database record indicates invalid birthdate')
//             } else {
//               // send the patients age
//               return res.status(200).send({ patientId: patientId, age: age })
//             }
//         }
//     });
//}