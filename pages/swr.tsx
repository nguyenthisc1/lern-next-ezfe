import { StudentDetail } from "@/components/swr";
import * as React from "react";

export interface ISWRPageProps {}

export default function SWRPage(props: ISWRPageProps) {
    return (
        <div>
            <h1>SWR Playground</h1>

            <ul>
                <li>
                    <StudentDetail studentId="lea11ziflg8xoiza" />
                </li>
                <li>
                    <StudentDetail studentId="lea11ziflg8xoiza" />
                </li>
                <li>
                    <StudentDetail studentId="lea11ziflg8xoiza" />
                </li>
            </ul>
        </div>
    );
}
