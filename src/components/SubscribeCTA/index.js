import React, { Fragment, useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import styles from './styles.module.scss';
import Button from '@components/Button';
import { MARKETING } from '@helpers/api';
import { useSnackbar } from '@components/Snackbar';
import Alert from '@components/Alert';

const SubscribeCTA = () => {
    const [showAlert, setShowAlert] = useState(false);
    const handleSubmit = async (values, actions) => {
        try {
            const { data } = await axios.post(MARKETING, values);
            setShowAlert(true);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className={styles.subscribeCtaWrapper}>
            <Formik
                validationSchema={yupObjectSchema}
                initialValues={{ email: '' }}
                onSubmit={handleSubmit}
                render={props => <SubscribeCTAForm {...props} showAlert={showAlert} />}
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
    showAlert,
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
                {showAlert && (
                    <Alert
                        // title={errors?.email}
                        showIcon
                        type="success"
                        message="Successfully subscribed!"
                        closable
                    />
                )}
                {errors.email && (
                    <Alert
                        // title={errors?.email}
                        showIcon
                        type="error"
                        message={errors?.email}
                        closable
                    />
                )}
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
