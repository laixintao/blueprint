/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as React from "react";

import { DatePicker2 } from "@blueprintjs/datetime2";
import { Example, ExampleProps } from "@blueprintjs/docs-theme";
import { H5 } from "@blueprintjs/core";
import { CommonLocale, LocaleSelect } from "../../common/localeSelect";

export const DatePicker2LocalizedExample: React.FC<ExampleProps> = (props) => {
    const [localeCode, setlocaleCode] = React.useState<CommonLocale>("fr");

    const options = (
        <>
            <H5>Locale code</H5>
            <LocaleSelect value={localeCode} onChange={setlocaleCode} />
        </>
    )

    return (
        <Example options={options} {...props}>
            <DatePicker2 localeCode={localeCode} />
        </Example>
    );
}
