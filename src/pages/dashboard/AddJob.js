import { FormRow, Alert, FormRowSelect } from '../../components'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrappers/DashboardFormPage'

const AddJob = () => {
    const {
        isLoading,
        isEditing,
        showAlert,
        displayAlert,
        position,
        company,
        jobLocation,
        jobType,
        jobTypeOptions,
        status,
        statusOptions,
        handleChange,
        clearValues,
        createJob,
        editJob
    } = useAppContext()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!position || !company || !jobLocation) {
            displayAlert()
            return
        }

        if (isEditing) {
            editJob()
            return
        }
        createJob()
    }

    const handleJobInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        handleChange({ name, value })
    }

    return (
        <Wrapper>
            <form className='form'>
                <h3>
                    {isEditing ? 'edit job' : 'add job'}
                </h3>
                {showAlert && <Alert />}
                <div className='form-center'>
                    {/* position */}
                    <FormRow
                        type='text'
                        name="position"
                        value={position}
                        handleChange={handleJobInput}
                    />
                    {/* company */}
                    <FormRow
                        type='text'
                        name="company"
                        value={company}
                        handleChange={handleJobInput}
                    />
                    {/* location */}
                    <FormRow
                        labelText="Job Location"
                        type='text'
                        name="jobLocation"
                        value={jobLocation}
                        handleChange={handleJobInput}
                    />
                    {/* job type */}
                    <FormRowSelect
                        name='jobType'
                        labelText='Job Type'
                        value={jobType}
                        handleChange={handleJobInput}
                        list={jobTypeOptions}
                    />
                    {/* job status */}
                    <FormRowSelect
                        name='status'
                        value={status}
                        handleChange={handleJobInput}
                        list={statusOptions}
                    />
                    <div className="btn-container">
                        <button
                            type='submit'
                            className='btn btn-block submit-btn'
                            onClick={handleSubmit}
                            disabled={isLoading}
                        >
                            Submit
                        </button>
                        <button
                            className='btn btn-block clear-btn'
                            onClick={(e) => {
                                e.preventDefault()
                                clearValues()
                                console.log('hello')
                            }}
                        >
                            Clear
                        </button>
                    </div>
                </div>
            </form>
        </Wrapper>
    )
}

export default AddJob
