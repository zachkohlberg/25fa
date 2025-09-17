// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item affix "><a href="about.html">About</a></li><li class="chapter-item "><a href="week1.html"><strong aria-hidden="true">1.</strong> Week 1</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="week1/csc110.html"><strong aria-hidden="true">1.1.</strong> CSC 110</a></li><li class="chapter-item "><a href="week1/syllabus.html"><strong aria-hidden="true">1.2.</strong> Syllabus</a></li><li class="chapter-item "><a href="week1/software.html"><strong aria-hidden="true">1.3.</strong> Software</a></li><li class="chapter-item "><a href="week1/terminal.html"><strong aria-hidden="true">1.4.</strong> Terminal</a></li></ol></li><li class="chapter-item "><a href="week2.html"><strong aria-hidden="true">2.</strong> Week 2</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="week2/java.html"><strong aria-hidden="true">2.1.</strong> Java</a></li><li class="chapter-item "><a href="week2/text.html"><strong aria-hidden="true">2.2.</strong> Text Files</a></li><li class="chapter-item "><a href="week2/compact_programs.html"><strong aria-hidden="true">2.3.</strong> Java Programs</a></li><li class="chapter-item "><a href="week2/variables.html"><strong aria-hidden="true">2.4.</strong> Variables</a></li><li class="chapter-item "><a href="week2/io.html"><strong aria-hidden="true">2.5.</strong> I/O</a></li><li class="chapter-item "><a href="week2/roles.html"><strong aria-hidden="true">2.6.</strong> The Program, Computer, and User</a></li><li class="chapter-item "><a href="week2/mental_model.html"><strong aria-hidden="true">2.7.</strong> Mental Model: I/O and Variables</a></li><li class="chapter-item "><a href="week2/practice.html"><strong aria-hidden="true">2.8.</strong> Practice Exercises</a></li></ol></li><li class="chapter-item "><a href="week3.html"><strong aria-hidden="true">3.</strong> Week 3</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="week3/types.html"><strong aria-hidden="true">3.1.</strong> Types</a></li><li class="chapter-item "><a href="week3/syntax.html"><strong aria-hidden="true">3.2.</strong> Syntax</a></li><li class="chapter-item "><a href="week3/variables.html"><strong aria-hidden="true">3.3.</strong> Variables</a></li><li class="chapter-item "><a href="week3/conversions.html"><strong aria-hidden="true">3.4.</strong> Conversions</a></li><li class="chapter-item "><a href="week3/numbers.html"><strong aria-hidden="true">3.5.</strong> Numbers</a></li><li class="chapter-item "><a href="week3/strings.html"><strong aria-hidden="true">3.6.</strong> Strings</a></li><li class="chapter-item "><a href="week3/errors.html"><strong aria-hidden="true">3.7.</strong> Errors</a></li><li class="chapter-item "><a href="week3/git.html"><strong aria-hidden="true">3.8.</strong> Class Git Repo</a></li><li class="chapter-item "><a href="week3/practice.html"><strong aria-hidden="true">3.9.</strong> Practice</a></li><li class="chapter-item "><a href="week3/tools.html"><strong aria-hidden="true">3.10.</strong> Tools</a></li></ol></li><li class="chapter-item "><a href="week4.html"><strong aria-hidden="true">4.</strong> Week 4</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="week4/spt.html"><strong aria-hidden="true">4.1.</strong> Structured Programming Theorem</a></li><li class="chapter-item "><a href="week4/boolean.html"><strong aria-hidden="true">4.2.</strong> Booleans</a></li><li class="chapter-item "><a href="week4/block.html"><strong aria-hidden="true">4.3.</strong> Code Blocks</a></li><li class="chapter-item "><a href="week4/if.html"><strong aria-hidden="true">4.4.</strong> If Statement</a></li><li class="chapter-item "><a href="week4/while.html"><strong aria-hidden="true">4.5.</strong> While Loop</a></li><li class="chapter-item "><a href="week4/counting.html"><strong aria-hidden="true">4.6.</strong> Counting Loop</a></li><li class="chapter-item "><a href="week4/practice.html"><strong aria-hidden="true">4.7.</strong> Practice</a></li></ol></li><li class="chapter-item "><a href="week5.html"><strong aria-hidden="true">5.</strong> Week 5</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="week5/functions.html"><strong aria-hidden="true">5.1.</strong> Functions</a></li><li class="chapter-item "><a href="week5/def.html"><strong aria-hidden="true">5.2.</strong> Function Definition/Implementation</a></li><li class="chapter-item "><a href="week5/call.html"><strong aria-hidden="true">5.3.</strong> Function Call</a></li><li class="chapter-item "><a href="week5/vocab.html"><strong aria-hidden="true">5.4.</strong> Syntax and Vocab</a></li><li class="chapter-item "><a href="week5/arrays.html"><strong aria-hidden="true">5.5.</strong> Arrays</a></li><li class="chapter-item "><a href="week5/java25.html"><strong aria-hidden="true">5.6.</strong> Java 25</a></li><li class="chapter-item "><a href="week5/assignments.html"><strong aria-hidden="true">5.7.</strong> Assignments</a></li><li class="chapter-item "><a href="week5/practice.html"><strong aria-hidden="true">5.8.</strong> Practice</a></li></ol></li><li class="chapter-item "><div><strong aria-hidden="true">6.</strong> Week 6</div></li><li class="chapter-item "><div><strong aria-hidden="true">7.</strong> Week 7</div></li><li class="chapter-item "><div><strong aria-hidden="true">8.</strong> Week 8</div></li><li class="chapter-item "><div><strong aria-hidden="true">9.</strong> Week 9</div></li><li class="chapter-item "><div><strong aria-hidden="true">10.</strong> Week 10</div></li><li class="chapter-item "><div><strong aria-hidden="true">11.</strong> Week 11</div></li><li class="chapter-item "><div><strong aria-hidden="true">12.</strong> Week 12</div></li><li class="chapter-item "><div><strong aria-hidden="true">13.</strong> Week 13</div></li><li class="chapter-item "><div><strong aria-hidden="true">14.</strong> Week 14</div></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
