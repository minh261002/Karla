"use client";

import { IconEye, IconEyeOff } from '@tabler/icons-react';
import Link from 'next/link'
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react'

const AdminResetPasswordPage = () => {
    const [passwordType, setPasswordType] = useState<"password" | "text">("password");
    const [passwordConfirmationType, setPasswordConfirmationType] = useState<"password" | "text">("password");

    const searchParams = useSearchParams();
    const token = searchParams.get("token");
    const email = searchParams.get("email");

    const togglePasswordType = () => {
        setPasswordType(passwordType === "password" ? "text" : "password");
    }

    const togglePasswordConfirmationType = () => {
        setPasswordConfirmationType(passwordConfirmationType === "password" ? "text" : "password");
    }

    return (
        <div className="card-body">
            <h2 className="h2 text-center mb-4">Đặt lại mật khẩu</h2>
            <form action="" method="post" autoComplete="off" noValidate>
                <input type="hidden" name="redirect" defaultValue="" />
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" autoComplete="off" name="email" defaultValue={email || ""} tabIndex={1} disabled />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                        Mật khẩu
                    </label>
                    <div className="input-group input-group-flat">
                        <input type={passwordType} className="form-control" name="password" autoComplete="off" tabIndex={2} />
                        <span className="input-group-text cursor-pointer" onClick={togglePasswordType}>
                            {passwordType === "text" ? <IconEyeOff /> : <IconEye />}
                        </span>
                    </div>
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Nhập lại mật khẩu
                    </label>
                    <div className="input-group input-group-flat">
                        <input type={passwordConfirmationType} className="form-control" name="password_confirmation" autoComplete="off" tabIndex={3} />
                        <span className="input-group-text cursor-pointer" onClick={togglePasswordConfirmationType}>
                            {passwordConfirmationType === "text" ? <IconEyeOff /> : <IconEye />}
                        </span>
                    </div>
                </div>

                <div className="form-footer">
                    <button type="submit" className="btn btn-primary w-100">
                        Lưu thay đổi
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

export default AdminResetPasswordPage