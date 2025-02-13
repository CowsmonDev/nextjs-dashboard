import React from "react";

export const ErrorDisplay = ({errors, id}:
                                 {
                                     errors?: String[], id: string
                                 }
) =>
    <React.Fragment>
        <div id={`${id}-error`} aria-live="polite" aria-atomic="true">
            {errors &&
                errors.map((error, index) => (
                    <p className="mt-2 text-sm text-red-500" key={error + " - " + index.toString()}>
                        {error}
                    </p>
                ))}
        </div>
    </React.Fragment>