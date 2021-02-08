import React, { Fragment } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import styles from './styles.module.scss';
import Button from '@components/Button';
import { useSnackbar } from '@components/Snackbar';
import Alert from '@components/Alert';

const SubscribeCTA = () => {
    // const [openSnackbar] = useSnackbar();
    const handleSubmit = () => {
        console.log('submitted');
        // openSnackbar(`submitted`);
    };
    return (
        <div className={styles.subscribeCtaWrapper}>
            <Formik
                validationSchema={yupObjectSchema}
                initialValues={{ email: '' }}
                onSubmit={handleSubmit}
                render={props => <SubscribeCTAForm {...props} />}
                validateOnBlur={false}
                validateOnChange={false}
                enableReinitialize
            />
        </div>
    );
};

export default SubscribeCTA;

const SubscribeCTAForm = ({
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    setFieldValue,
    isSubmitting,
    setSubmitting,
}) => {
    return (
        <form className={styles.subscribeCtaForm}>
            <div className={styles.inputBox}>
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values?.email}
                    placeholder="Yor email..."
                />
                {/*{errors.email && <p>{errors?.email}</p>}*/}
            </div>
            <Button disabled={isSubmitting} onClick={handleSubmit} text="Subscribe" />
        </form>
    );
};

const yupObjectSchema = Yup.object().shape({
    email: Yup.string()
        .email('Must be a valid email')
        .required('Email is required'),
});
