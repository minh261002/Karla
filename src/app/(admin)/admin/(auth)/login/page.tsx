"use client";

import { IconEye, IconEyeOff } from '@tabler/icons-react';
import Link from 'next/link'
import React, { useState } from 'react'

const AdminLoginPage = () => {
    const [passwordType, setPasswordType] = useState<"password" | "text">("password");

    const togglePasswordType = () => {
        setPasswordType(passwordType === "password" ? "text" : "password");
    }

    return (
        <div className="card-body">
            <h2 className="h2 text-center mb-4">Quản trị viên</h2>
            <form action="" method="post" autoComplete="off" noValidate>
                <input type="hidden" name="redirect" defaultValue="" />
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" autoComplete="off" name="email" tabIndex={1} />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                        Mật khẩu
                        <span className="form-label-description">
                            <Link href="/admin/forgot-password">
                                Quên mật khẩu
                            </Link>
                        </span>
                    </label>
                    <div className="input-group input-group-flat">
                        <input type={passwordType} className="form-control" name="password" autoComplete="off" tabIndex={2} />
                        <span className="input-group-text cursor-pointer" onClick={togglePasswordType}>
                            {passwordType === "text" ? <IconEyeOff /> : <IconEye />}
                        </span>
                    </div>
                </div>

                <div className="form-footer">
                    <button type="submit" className="btn btn-primary w-100">
                        Đăng nhập
                    </button>
                </div>
            </form>
        </div>

    )
}

export default AdminLoginPage