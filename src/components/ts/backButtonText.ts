export default function ( ) { 
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode; 
                                        // The logical AND (&&) operator (logical conjunction) 
                                        // for a set of operands 
                                        // is true if and only if all of its operands are true.
    let text = " " ;                    // ===	equal value and equal type
    if ( mode === 'ios' ) {
        text = 'Back' } 
    return { text }
    } 