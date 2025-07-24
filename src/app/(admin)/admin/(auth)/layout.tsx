
import AppLogo from '@/components/logo'
import Link from 'next/link'
import React from 'react'

const AdminAuthLayout = (
    { children }: { children: React.ReactNode }
) => {
    return (
        <div className="w-100 d-flex flex-column" style={{ height: "100vh" }}>
            <div className="page page-center">
                <div className="container container-tight py-4">
                    <div className="text-center mb-4">
                        <Link href="#" className="navbar-brand navbar-brand-autodark gap-4">
                            <AppLogo
                                width={120}
                                height={32}
                            />
                        </Link>
                    </div>
                    <div className="card card-md">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminAuthLayout