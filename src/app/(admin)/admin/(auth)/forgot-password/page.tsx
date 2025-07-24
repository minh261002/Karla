import Link from 'next/link'
import React from 'react'

const AdminForgotPasswordPage = () => {

    return (
        <div className="card-body">
            <h2 className="h2 text-center mb-4">Quên mật khẩu</h2>
            <form action="" method="post" autoComplete="off" noValidate>
                <div className="mb-3">
                    <label className="form-label">
                        Email
                    </label>
                    <div className="input-group input-group-flat">
                        <input type="email" className="form-control" name="email" autoComplete="off" tabIndex={2} />
                    </div>
                </div>

                <div className="form-footer">
                    <button type="submit" className="btn btn-primary w-100">
                        Gửi yêu cầu
                    </button>
                </div>

                <div className="mt-3 text-center">
                    <Link href="/admin/login" className="link-primary">
                        Quay lại đăng nhập
                    </Link>
                </div>
            </form>
        </div>

    )
}

export default AdminForgotPasswordPage