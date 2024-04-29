function AccountPage() {
    return (
        <>
        {/*Personal Details*/}
        <div className={'container mb-5 bg-success'}>
            <h1 className={'mb-3'}>Personal</h1>
            <div className="row">
                <div className={'col-md-6'}>
                    <h3>First Name</h3>
                </div>
                <div className={'col-md-6'}>
                    <h3>Last Name</h3>
                </div>
            </div>
            <div className="row">
                <div className={'col-md-6'}>
                    <input type="text" id={'firstName'} style={{width: '90%'}}/>
                </div>
                <div className={'col-md-6'}>
                    <input type="text" id={'lastName'} style={{width: '90%'}}/>
                </div>
            </div>

            <div className="row">
                <div className={'col-md-6'}>
                    <h3>Email</h3>
                </div>
                <div className={'col-md-6'}>
                    <h3>Phone</h3>
                </div>
            </div>
            <div className="row">
                <div className={'col-md-6'}>
                    <input type="email" id={'email'} style={{width: '90%'}}/>
                </div>
                <div className={'col-md-6'}>
                    <input type="tel" id={'phone'} style={{width: '90%'}}/>
                </div>
            </div>
        </div>
            {/*Work Details*/}
            <div className="container bg-warning-subtle mb-4">
                <h1 className={'mb-3'}>Work</h1>

                <div className="row">
                    <div className={'col-md-6'}>
                        <h3>Company</h3>
                    </div>
                    <div className={'col-md-6'}>
                        <h3>Position</h3>
                    </div>
                </div>
                <div className="row">
                    <div className={'col-md-6'}>
                        <input type="text" id={'company'} style={{width: '90%'}}/>
                    </div>
                    <div className={'col-md-6'}>
                        <input type="text" id={'position'} style={{width: '90%'}}/>
                    </div>
                </div>

                <div className="row">
                    <div className={'col-md-6'}>
                        <h3>Hire Date</h3>
                    </div>
                    <div className={'col-md-6'}>
                        <h3>Hourly Wage</h3>
                    </div>
                </div>
                <div className="row">
                    <div className={'col-md-6'}>
                        <input type="text" id={'hireDate'} style={{width: '90%'}}/>
                    </div>
                    <div className={'col-md-6'}>
                        <input type="text" id={'hourlyWage'} style={{width: '90%'}}/>
                    </div>
                </div>
            </div>

            <div className="container d-flex justify-content-end">
                <button>Save</button>
            </div>
        </>
    )
}

export default AccountPage;